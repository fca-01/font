'use client'

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function FontLoader() {
  const searchParams = useSearchParams();
  const fontNameURL = searchParams.get('fonte') || "Outfit";  // Valor padrão "Outfit"

  return (
    <Suspense fallback={<div>Erro</div>}>
      <link
        href={`https://fonts.googleapis.com/css2?family=${fontNameURL}&display=swap`}
        rel="stylesheet"
      />
    </Suspense>
  );
}