interface CardProps {
  title: string;
  image: string;
  text: string;
}

export const Card = ({ title, image, text }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div
        className="h-56 bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-700">
          {title}
        </h3>
        <p className="text-3xl text-gray-900">{text}</p>
      </div>
    </div>
  );
};
