import gallerySection from "./images";

export default function GallerySection() {
  return (
    <div className="w-full flex flex-col max-w-7xl m-auto justify-center items-center text-center text-gra">
      <h2 id="sobre-mim">Daniella Berton</h2>
      <p className="md:px-16 px-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quidem quam reiciendis vitae, vero sunt repellat iure perferendis laborum explicabo quia consequatur. Assumenda aspernatur accusantium molestias at maxime porro expedita!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 truncate py-5">
        {gallerySection.map((image, index) => (
          <div key={image.id} className={`${ index === 8 && "hidden md:block" } md:w-60 w-40`}>
            <img
              src={image.img}
              alt={image.name}
              className="md:hover:scale-105 ease-in-out transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
