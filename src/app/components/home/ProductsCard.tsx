import Image from "next/image";
import Rating from "@mui/material/Rating";
import textClip from "../../../../utils/TextClip";

const ProductsCard = ({ product }: { product: any }) => {
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
      product.reviews?.length || 0;

  return (
    <div className="w-[200px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
      <div className="relative h-[150px]">
        <Image src={product.image} fill alt="" className="object-contain" />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>{textClip(product.name)}</div>
        <Rating name="half-rating-read" defaultValue={productRating} readOnly />
        <div className="text-orange-600 font-bold text-lg md:text-xl ">
          {product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
