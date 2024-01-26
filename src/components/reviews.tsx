import { StarIcon } from "@/assets/icons/star"

interface StarRatingsProps {
  reviews: number
  ratings: number
}

export function Reviews({ ratings, reviews }: StarRatingsProps) {
  const percentage = parseFloat((ratings / 5).toFixed(2)) * 100

  return (
    <p className="flex max-h-max max-w-max flex-col self-center justify-self-center lg:justify-self-start">
      <span className="ml-9 text-2xl">
        {ratings}
        <span className="text-base">/5</span>
      </span>
      <span
        style={{
          backgroundImage: `linear-gradient(to right, #facc15 0%, #facc15 ${percentage}%, transparent ${percentage + 0.1}%)`
        }}
        className={`relative bg-clip-text pr-1 text-3xl leading-7 tracking-[-0.29rem] text-transparent`}
      >
        &#9733; &#9733; &#9733; &#9733; &#9733;
        <span className="absolute left-[0.04rem] top-[0.20rem] flex text-text-950">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
      </span>
      <span className="mx-auto text-base">{reviews} reviews</span>
    </p>
  )
}
