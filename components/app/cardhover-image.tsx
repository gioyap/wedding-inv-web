import { CardHoverImage } from "../ui/card-hover-image";
import { Meow_Script } from 'next/font/google';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});


export default function CardHoverImagePage() {
  return (
    <>
      <h2 className={`text-5xl xl:text-7xl font-bold text-center py-2 lg:py-10 text-[#101b4b] dark:text-[#f6d673] ${meowScript.className}`}>
      Event Timeline
      </h2>
      <p className="text-[#101b4b] dark:text-white flex justify-center text-center max-w-xs mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
      Please join us as we exchange vows, create memories, and dance the night away. Your presence will make our day truly unforgettable.
      </p>
    <CardHoverImage
      items={[
        {
          title: "Background Overlays",
          description: "This card shows a background GIF on hover.",
          image:
            "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          hoverImage:
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
        },
        {
          title: "Background Overlays1",
          description: "This card shows a background GIF on hover.",
          image:
            "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          hoverImage:
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
        },
        {
          title: "Background Overlays2",
          description: "This card shows a background GIF on hover.",
          image:
            "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          hoverImage:
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
        },
        {
          title: "Background Overlays3",
          description: "This card shows a background GIF on hover.",
          image:
            "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          hoverImage:
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
        },
        {
          title: "Background Overlays4",
          description: "This card shows a background GIF on hover.",
          image:
            "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          hoverImage:
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
        },
        {
          title: "Background Overlays5",
          description: "This card shows a background GIF on hover.",
          image:
            "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          hoverImage:
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
        },
        // Add more items here
      ]}
    />
  </>
  );
}
