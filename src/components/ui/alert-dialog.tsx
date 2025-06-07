import * as React from "react"
import * as ReactDOM from "react-dom"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

console.log("🔥 ALERT DIALOG ULTIMATE PURGE: 100% Custom Implementation - ZERO RADIX");

interface AlertDialogContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AlertDialogContext = React.createContext<AlertDialogContextType | null>(null);

interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ children, open, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  
  const isOpen = open !== undefined ? open : internalOpen;
  
  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [open, onOpenChange]);

  console.log("🔥 ALERT DIALOG ULTIMATE PURGE: Rendering custom alert dialog");

  const contextValue = React.useMemo(() => ({
    open: isOpen,
    setOpen: handleOpenChange
  }), [isOpen, handleOpenChange]);

  return (
    <AlertDialogContext.Provider value={contextValue}>
      {children}
    </AlertDialogContext.Provider>
  );
};

interface AlertDialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, AlertDialogTriggerProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);

    const handleClick = () => {
      context?.setOpen(true);
    };

    console.log("🔥 ALERT DIALOG TRIGGER ULTIMATE PURGE: Rendering custom trigger");

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        onClick: handleClick,
      });
    }

    return (
      <button
        ref={ref}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

AlertDialogTrigger.displayName = "AlertDialogTrigger";

const AlertDialogPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥 ALERT DIALOG PORTAL ULTIMATE PURGE: Rendering custom portal");
  
  return ReactDOM.createPortal(children, document.body);
};

interface AlertDialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogOverlay = React.forwardRef<HTMLDivElement, AlertDialogOverlayProps>(
  ({ className, ...props }, ref) => {
    console.log("🔥 ALERT DIALOG OVERLAY ULTIMATE PURGE: Rendering custom overlay");
    
    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    );
  }
);

AlertDialogOverlay.displayName = "AlertDialogOverlay";

interface AlertDialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogContent = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);

    console.log("🔥 ALERT DIALOG CONTENT ULTIMATE PURGE: Rendering custom content");

    if (!context?.open) return null;

    return (
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <div
          ref={ref}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AlertDialogPortal>
    );
  }
);

AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
);
AlertDialogTitle.displayName = "AlertDialogTitle";

interface AlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
AlertDialogDescription.displayName = "AlertDialogDescription";

interface AlertDialogActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AlertDialogAction = React.forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      context?.setOpen(false);
      props.onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants(), className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
AlertDialogAction.displayName = "AlertDialogAction";

interface AlertDialogCancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AlertDialogCancel = React.forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      context?.setOpen(false);
      props.onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
AlertDialogCancel.displayName = "AlertDialogCancel";

console.log("🔥 ALERT DIALOG EXPORTS ULTIMATE PURGE: Exporting 100% custom components with ZERO dependencies");

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
