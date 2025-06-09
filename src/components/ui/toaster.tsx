
import { Toaster as Sonner } from "sonner"

console.log('🔧 TOASTER: Carregando toaster limpo');

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  console.log('🔧 TOASTER: Renderizando toaster');
  
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-slate-900 group-[.toaster]:text-white group-[.toaster]:border-slate-700 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-indigo-600 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-slate-700 group-[.toast]:text-slate-200",
        },
      }}
      {...props}
    />
  )
}

console.log('✅ TOASTER: Toaster definido com sucesso');
export { Toaster }
