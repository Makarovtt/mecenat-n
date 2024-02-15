import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface Props {
  children: any;
  width: string;
  className: string;
  styleContent: string;
  isOpen: boolean;
  onClose: any;
}

/**
 *
 * @param {{
 *  className: string,
 *  styleContent: string;
 *  width: 'md' | 'full',
 *  isOpen: boolean,
 *  onClose: Function
 * }} props
 * @returns
 */
export function ModalCustom({
  width,
  className,
  styleContent,
  children,
  isOpen,
  onClose,
}: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur flex justify-center items-center z-20 overflow-y-auto",
        className,
      )}
    >
      <div
        className={clsx(
          "bg-white p-6 rounded-lg w-full min-h-[320px]",
          styleContent,
          {
            md: "max-w-[640px]",
            full: "mx-5",
          }[width],
        )}
      >
        {children}
      </div>
      <Button
        onClick={onClose}
        className="
                    bg-white w-[50px] h-[50px] rounded-full text-red-600 
                    flex justify-center items-center fixed top-7 right-7 text-2xl
                     hover:bg-red-600 hover:text-white transition duration-300
        "
      >
        X
      </Button>
    </div>
  );
}
