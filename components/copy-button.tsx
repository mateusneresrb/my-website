import clsx from "clsx";
import { HeroIcon } from "components/dynamic-hero-icon";
import { useToast } from "components/toast";
import { useCallback } from "react";
import { useCopyToClipboard } from "react-use";

export const CopyButton = ({ content, className }: { className: string; content: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const { toasts, addToast } = useToast();

  const handleCopyCode = useCallback(() => {
    copyToClipboard(content);
    addToast({
      id: "copy-code",
      message: "Code Copied to Clipboard",
      timestamp: Date.now(),
    });
  }, [addToast, content, copyToClipboard]);

  return (
    <button className={clsx(className, "transition-colors")} onClick={handleCopyCode} type="button">
      {toasts.some((notification) => notification.id === "copy-code")
        ? <HeroIcon name="ClipboardDocumentCheckIcon" className="h-5 w-5 text-sky-400" />
        : <HeroIcon name="ClipboardDocumentIcon" className="h-5 w-5" />}
    </button>
  );
};