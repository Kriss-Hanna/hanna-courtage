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
  const resolvedMinHeight =
    typeof minHeight === "number" ? `${minHeight}px` : minHeight;

  useEffect(() => {
    if (!url || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    container.style.minHeight = resolvedMinHeight;
    container.style.height = resolvedMinHeight;

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      }
    };

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_WIDGET_SCRIPT}"]`
    );

    if (script) {
      if (window.Calendly) {
        initWidget();
      } else {
        script.addEventListener("load", initWidget);
      }
    } else {
      script = document.createElement("script");
      script.src = CALENDLY_WIDGET_SCRIPT;
      script.async = true;
      script.addEventListener("load", initWidget);
      document.body.appendChild(script);
    }

    return () => {
      script?.removeEventListener("load", initWidget);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [url, resolvedMinHeight]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        minHeight,
        height: minHeight,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        backgroundColor: "white",
        "& .calendly-inline-widget": {
          minWidth: "140%",
          height: "100%",
        },
      }}
    />
  );
};

export default CalendlyInlineWidget;
