import images from "@/app/constants/images";
import PrimaryButton from "@/app/utils/PrimaryButton";
import Wrapper from "@/app/utils/Wrapper";

export default function LetsWorkTogether() {
  return (
    <Wrapper className="col-span-2 row-span-2  sm:h-[348px] p-4 sm:col-span-1 md:col-span-1 flex items-center">
      <div className="flex items-center justify-center gap-2 flex-col text-sm">
        <div className="w-[50px] h-[50px] border-brightBorder border-[1px] rounded-full bg-primaryBorder flex items-center justify-center">
          {images.RainbowStar}
        </div>
        <h3>Let's work together!</h3>
        <div className="text-xs text-center mb-4">
          Let's transform your ideas into reality for your projects
        </div>
        <PrimaryButton href="mailto:tanithflory6660@gmail.com" icon={images.Email} text="Email me" maxWidth="220px" />
      </div>
    </Wrapper>
  );
}
