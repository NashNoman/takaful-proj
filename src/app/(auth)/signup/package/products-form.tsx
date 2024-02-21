import React from "react";

export default function ProductsForm() {
  return (
    <>
      <div className="px-4 relative flex justify-center items-center">
        {index.current > 0 && (
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 left-4"
            onClick={prev}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
        )}
        <Link href="/">
          <Image
            src="/Takaful-logo.png"
            alt="Takaful Logo"
            width={40}
            height={40}
            className="my-5"
          />
        </Link>
      </div>
    </>
  );
}
