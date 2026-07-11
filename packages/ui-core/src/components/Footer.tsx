import { Container } from "./Container";

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  columns?: FooterColumn[];
  copyright: string;
}

export function Footer({ columns = [], copyright }: FooterProps) {
  return (
    <footer className="border-t border-neutral-200">
      <Container className="py-12">
        {columns.length > 0 ? (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold">{column.heading}</h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-neutral-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
        <p className="mt-12 text-sm text-neutral-500">{copyright}</p>
      </Container>
    </footer>
  );
}
