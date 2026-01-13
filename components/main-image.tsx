import Image from "next/image"

export function MainImage() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/assets/images/android.png"
            alt="Ombrelones Surya"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
