export function H1({ className, children }: any) {
  return <h1 className={`text-3xl ${className}`}>{children}</h1>;
}

export function H2({ className, children }: any) {
  return <h2 className={`text-[1.625rem] font-light ${className}`}>{children}</h2>;
}

export function P({ className, children }: any) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}

export function S({ className, children }: any) {
  return <p className={`${className}`}>{children}</p>;
}
