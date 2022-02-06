import * as images from "../assets/images";
import * as gifs from "../assets/gifs";

type dataType = {
  title: string;
  subTitle: string;
  gif?: NodeRequire;
  bg?: NodeRequire;
}[];

const useSportCardsData = () => {
  const fullBodyCardData: dataType = [
    {
      title: "Chest Press",
      subTitle: "3 Set 12-10-8",
      gif: gifs.chestPressGif,
      bg: images.chestBg,
    },
    {
      title: "Butterfly",
      subTitle: "3 Set 12-10-8",
      gif: gifs.butterflyGif,
      bg: images.chestBg,
    },
    {
      title: "Shoulder Press",
      subTitle: "3 Set 12-10-8",
      gif: gifs.shoulderPressGif,
      bg: images.shoulderBg,
    },
    {
      title: "Lat Pulldown",
      subTitle: "3 Set 12-10-8",
      gif: gifs.latPullDownGif,
      bg: images.backBg,
    },
    {
      title: "Low Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.lowRowGif,
      bg: images.backBg,
    },
    {
      title: "Dumbell Curls",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellCurlsGif,
      bg: images.bicepsBg,
    },
    {
      title: "Scot Curls",
      subTitle: "3 Set 12-10-8",
      gif: gifs.scotCurlGif,
      bg: images.bicepsBg,
    },
    {
      title: "Push Down",
      subTitle: "3 Set 12-10-8",
      gif: gifs.pushDownGif,
      bg: images.tricepsBg,
    },
    {
      title: "Squat",
      subTitle: "3 Set 12-10-8",
      gif: gifs.barbellSquatGif,
      bg: images.legsBg,
    },
  ];
  const chestBackBicepsData: dataType = [
    {
      title: "Bench Press",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.benchPressGif,
      bg: images.chestBg,
    },
    {
      title: "Butterfly",
      subTitle: "3 Set 12-10-8",
      gif: gifs.butterflyGif,
      bg: images.chestBg,
    },
    {
      title: "Inline Bench Press",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.inlineBenchGif,
      bg: images.chestBg,
    },
    {
      title: "Dumbell Pull Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellPulloeverGif,
      bg: images.chestBg,
    },
    {
      title: "Lat Pulldown",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.latPullDownGif,
      bg: images.backBg,
    },
    {
      title: "Low Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.lowRowGif,
      bg: images.backBg,
    },
    {
      title: "Dumbell Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellRowGif,
      bg: images.backBg,
    },
    {
      title: "Z Bar Barbell Curl",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.zBarBarbellCurlGif,
      bg: images.bicepsBg,
    },
    {
      title: "Incline Dumbell Curl",
      subTitle: "3 Set 12-10-8",
      gif: gifs.inclineDumbellCurlGif,
      bg: images.bicepsBg,
    },
    {
      title: "Scout Curl",
      subTitle: "3 Set 12-10-8",
      gif: gifs.scotCurlGif,
      bg: images.bicepsBg,
    },
    {
      title: "Wrist",
      subTitle: "2 Set 20-15",
      gif: gifs.wristGif,
      bg: images.wristBg,
    },
  ];
  const shoulderTricepsLegsData: dataType = [
    {
      title: "Shoulder Press",
      subTitle: "4 Set 12-10-8-6",
      gif: gifs.shoulderPressGif,
      bg: images.shoulderBg,
    },
    {
      title: "Lateral Press",
      subTitle: "3 Set 12-10-8",
      gif: gifs.lateralPressGif,
      bg: images.shoulderBg,
    },
    {
      title: "Bent Over Raise",
      subTitle: "3 Set 12-10-8",
      gif: gifs.bentOverRaiseGif,
      bg: images.shoulderBg,
    },
    {
      title: "Upright Row",
      subTitle: "3 Set 12-10-8",
      gif: gifs.uprightRowGif,
      bg: images.shoulderBg,
    },
    {
      title: "Z Bar Lying",
      subTitle: "3 Set 12-10-8",
      gif: gifs.zBarLyingGif,
      bg: images.tricepsBg,
    },
    {
      title: "Dumbell Triceps",
      subTitle: "3 Set 12-10-8",
      gif: gifs.dumbellTrecepsGif,
      bg: images.tricepsBg,
    },
    {
      title: "Pushdown",
      subTitle: "3 Set 12-10-8",
      gif: gifs.pushDownGif,
      bg: images.tricepsBg,
    },
    {
      title: "Squats",
      subTitle: "3 Set 12-10-8",
      gif: gifs.barbellSquatGif,
      bg: images.legsBg,
    },
    {
      title: "Legs Extension ",
      subTitle: "3 Set 12-10-8",
      gif: gifs.legExtensionsGif,
      bg: images.legsBg,
    },
    {
      title: "Legs Curl",
      subTitle: "3 Set 12-10-8",
      gif: gifs.legsCurlGif,
      bg: images.legsBg,
    }
  ];

  return { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData };
};

export default useSportCardsData;
