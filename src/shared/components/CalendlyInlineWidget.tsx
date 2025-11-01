import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
      initPopupWidget?: (options: { url: string }) => void;
    };
  }
}

interface CalendlyInlineWidgetProps {
  url: string;
  minHeight?: string | number;
}

const CALENDLY_WIDGET_SCRIPT =
  "https://assets.calendly.com/assets/external/widget.js";

const CalendlyInlineWidget: React.FC<CalendlyInlineWidgetProps> = ({
  url,
  minHeight = 720,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!url || !containerRef.current) {
      return;
    }

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      }
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_WIDGET_SCRIPT}"]`
    );

    if (existingScript) {
      if (window.Calendly) {
        initWidget();
      } else {
        existingScript.addEventListener("load", initWidget);
      }

      return () => {
        existingScript.removeEventListener("load", initWidget);
      };
    }

    const script = document.createElement("script");
    script.src = CALENDLY_WIDGET_SCRIPT;
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initWidget);
    };
  }, [url]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        minHeight,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        backgroundColor: "white",
      }}
    />
  );
};

export default CalendlyInlineWidget;

