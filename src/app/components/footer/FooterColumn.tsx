// components/Footer/FooterColumn.tsx
import React from "react";
import Link from "next/link";

type Props = { title: string; links: string[] };

export default function FooterColumn({ title, links }: Props) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-xs">
        {links.map((t) => (
          <li key={t}>
            <Link href="#" className="hover:underline">
              {t}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
