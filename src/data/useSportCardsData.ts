import * as images from "../assets/images";
import * as gifs from "../assets/gifs";

type dataType = {
  title: string;
  subTitle: string;
  gif?: NodeRequire;
  bg?: NodeRequire;
  set:number;
}[];

const useSportCardsData = () => {
  const fullBodyCardData: dataType = [
    {
      title: "Chest Press",
      subTitle: "3 Set 12-10-8",
      gif: gifs.chestPressGif,
      bg: images.chestBg,
      set:3
    },
    {
      title: "Butterfly",
      subTitle: "3 Set 12-10-8",
      gif: gifs.butterflyGif,
      bg: images.chestBg,
      set:3
    },
    {
      title: "Shoulder Press",
      subTitle: "3 Set 12-10-8",
      gif: gifs.shoulderPressGif,
      bg: images.shoulderBg,
      set:3
    },
    {
      title: "Lat Pulldown",
      subTitle: "3 Set 12-10-8",
      gif: gifs.latPullDownGif,
      bg: images.backBg,
      set:3
    },
    {
      title: "Low Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.lowRowGif,
      bg: images.backBg,
      set:3
    },
    {
      title: "Dumbell Curls",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellCurlsGif,
      bg: images.bicepsBg,
      set:3
    },
    {
      title: "Scott Curls",
      subTitle: "3 Set 12-10-8",
      gif: gifs.scotCurlGif,
      bg: images.bicepsBg,
      set:3
    },
    {
      title: "Push Down",
      subTitle: "3 Set 12-10-8",
      gif: gifs.pushDownGif,
      bg: images.tricepsBg,
      set:3
    },
    {
      title: "Squat",
      subTitle: "3 Set 12-10-8",
      gif: gifs.barbellSquatGif,
      bg: images.legsBg,
      set:3
    },
  ];
  const chestBackBicepsData: dataType = [
    {
      title: "Bench Press",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.benchPressGif,
      bg: images.chestBg,
      set:4
    },
    {
      title: "Butterfly",
      subTitle: "3 Set 12-10-8",
      gif: gifs.butterflyGif,
      bg: images.chestBg,
      set:3
    },
    {
      title: "Inline Bench Press",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.inlineBenchGif,
      bg: images.chestBg,
      set:4
    },
    {
      title: "Dumbell Pull Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellPulloeverGif,
      bg: images.chestBg,
      set:3
    },
    {
      title: "Lat Pulldown",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.latPullDownGif,
      bg: images.backBg,
      set:4
    },
    {
      title: "Low Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.lowRowGif,
      bg: images.backBg,
      set:3
    },
    {
      title: "Dumbell Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellRowGif,
      bg: images.backBg,
      set:3
    },
    {
      title: "Z Bar Barbell Curl",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.zBarBarbellCurlGif,
      bg: images.bicepsBg,
      set:4
    },
    {
      title: "Incline Dumbell Curl",
      subTitle: "3 Set 12-10-8",
      gif: gifs.inclineDumbellCurlGif,
      bg: images.bicepsBg,
      set:3
    },
    {
      title: "Scott Curl",
      subTitle: "3 Set 12-10-8",
      gif: gifs.scotCurlGif,
      bg: images.bicepsBg,
      set:3
    },
    {
      title: "Wrist",
      subTitle: "2 Set 20-15",
      gif: gifs.wristGif,
      bg: images.wristBg,
      set:2
    },
  ];
  const shoulderTricepsLegsData: dataType = [
    {
      title: "Shoulder Press",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.shoulderPressGif,
      bg: images.shoulderBg,
      set:4
    },
    {
      title: "Lateral Press",
      subTitle: "3 Set 12-10-8",
      gif: gifs.lateralPressGif,
      bg: images.shoulderBg,
      set:3
    },
    {
      title: "Bent Over Raise",
      subTitle: "3 Set 12-10-8",
      gif: gifs.bentOverRaiseGif,
      bg: images.shoulderBg,
      set:3
    },
    {
      title: "Upright Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.uprightRowGif,
      bg: images.shoulderBg,
      set:3
    },
    {
      title: "Z Bar Lying",
      subTitle: "3 Set 12-10-8",
      gif: gifs.zBarLyingGif,
      bg: images.tricepsBg,
      set:3
    },
    {
      title: "Dumbell Triceps",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellTrecepsGif,
      bg: images.tricepsBg,
      set:3
    },
    {
      title: "Pushdown",
      subTitle: "3 Set 12-10-8",
      gif: gifs.pushDownGif,
      bg: images.tricepsBg,
      set:3
    },
    {
      title: "Squats",
      subTitle: "3 Set 12-10-8",
      gif: gifs.barbellSquatGif,
      bg: images.legsBg,
      set:3
    },
    {
      title: "Legs Extension ",
      subTitle: "3 Set 12-10-8",
      gif: gifs.legExtensionsGif,
      bg: images.legsBg,
      set:3
    },
    {
      title: "Legs Curl",
      subTitle: "3 Set 12-10-8",
      gif: gifs.legsCurlGif,
      bg: images.legsBg,
      set:3
    }
  ];

  return { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData };
};

export default useSportCardsData;
