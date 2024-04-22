interface ShoeTileProps {
  shoe: any[];
}

const ShoeTile: React.FC<ShoeTileProps> = ({ shoe: Shoe }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const imageModule = await shoe.imgPath();
      setImgSrc(imageModule.default);
    };

    fetchImage();
  }, [shoe]);

  return (
    <div className="shoe-tile">
      <h2>{shoe.brand}</h2>
      <h3>{shoe.model}</h3>
      <p>{shoe.description}</p>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={`${shoe.brand} ${shoe.model}`}
          className="shoeImage"
        />
      )}
      <p>£{shoe.price}</p>
      {shoe.onSale && (
        <p className="salePrice">Sale Price: £{shoe.salePrice}</p>
      )}
    </div>
  );
};

export default ShoeTile;
