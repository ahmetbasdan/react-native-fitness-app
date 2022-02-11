import * as images from "../assets/images";
import * as gifs from "../assets/gifs";
import { movementType, trainingType } from "../typings";
import i18n from 'i18n-js'

type dataType = {
  title: string;
  subTitle: string;
  gif?: NodeRequire;
  bg?: NodeRequire;
  training: trainingType;
  movement: movementType;
}[];

const useSportCardsData = () => {
  const fullBodyCardData: dataType = [
    {
      title: "Chest Press",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.chestPressGif,
      bg: images.chestBg,
      movement:"chestPress",
      training:"fullBody"
    },
    {
      title: "Butterfly",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.butterflyGif,
      bg: images.chestBg,
      movement:"butterfly",
      training:"fullBody"
    },
    {
      title: "Shoulder Press",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.shoulderPressGif,
      bg: images.shoulderBg,
      movement:"shoulderPress",
      training:"fullBody"
    },
    {
      title: "Lat Pulldown",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.latPullDownGif,
      bg: images.backBg,
      movement:"latPulldown",
      training:"fullBody"
    },
    {
      title: "Low Row",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.lowRowGif,
      bg: images.backBg,
      movement:"lowRow",
      training:"fullBody"
    },
    {
      title: "Dumbell Curls",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.dumbellCurlsGif,
      bg: images.bicepsBg,
      movement:"dumbellCurls",
      training:"fullBody"
    },
    {
      title: "Scott Curl",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.scotCurlGif,
      bg: images.bicepsBg,
      movement:"scottCurl",
      training:"fullBody"
    },
    {
      title: "Push Down",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.pushDownGif,
      bg: images.tricepsBg,
      movement:"pushDown",
      training:"fullBody"
    },
    {
      title: "Squat",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.barbellSquatGif,
      bg: images.legsBg,
      movement:"squat",
      training:"fullBody"
    },
  ];
  const chestBackBicepsData: dataType = [
    {
      title: "Bench Press",
      subTitle: `4 ${i18n.t('training.movement.set')} 12-10-8-6`,
      gif: gifs.benchPressGif,
      bg: images.chestBg,
      movement:"benchPress",
      training:"chestBackBiceps"
    },
    {
      title: "Butterfly",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.butterflyGif,
      bg: images.chestBg,
      movement:"butterfly",
      training:"chestBackBiceps"
    },
    {
      title: "Inline Bench Press",
      subTitle: `4 ${i18n.t('training.movement.set')} 12-10-8-6`,
      gif: gifs.inlineBenchGif,
      bg: images.chestBg,
      movement:"inlineBenchPress",
      training:"chestBackBiceps"
    },
    {
      title: "Dumbell Pull Row",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.dumbellPulloeverGif,
      bg: images.chestBg,
      movement:"dumbellPullRow",
      training:"chestBackBiceps"
    },
    {
      title: "Lat Pulldown",
      subTitle: `4 ${i18n.t('training.movement.set')} 12-10-8-6`,
      gif: gifs.latPullDownGif,
      bg: images.backBg,
      movement:"latPulldown",
      training:"chestBackBiceps"
    },
    {
      title: "Low Row",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.lowRowGif,
      bg: images.backBg,
      movement:"lowRow",
      training:"chestBackBiceps"
    },
    {
      title: "Dumbell Row",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.dumbellRowGif,
      bg: images.backBg,
      movement:"dumbellRow",
      training:"chestBackBiceps"
    },
    {
      title: "Z Bar Barbell Curl",
      subTitle: `4 ${i18n.t('training.movement.set')} 12-10-8-6`,
      gif: gifs.zBarBarbellCurlGif,
      bg: images.bicepsBg,
      movement:"zBarBarbellCurl",
      training:"chestBackBiceps"
    },
    {
      title: "Incline Dumbell Curl",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.inclineDumbellCurlGif,
      bg: images.bicepsBg,
      movement:"inclineDumbellCurl",
      training:"chestBackBiceps"
    },
    {
      title: "Scott Curl",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.scotCurlGif,
      bg: images.bicepsBg,
      movement:"scottCurl",
      training:"chestBackBiceps"
    },
    {
      title: "Wrist",
      subTitle: `2 ${i18n.t('training.movement.set')} 20-15 8`,
      gif: gifs.wristGif,
      bg: images.wristBg,
      movement:"wrist",
      training:"chestBackBiceps"
    },
  ];
  const shoulderTricepsLegsData: dataType = [
    {
      title: "Shoulder Press",
      subTitle: `4 ${i18n.t('training.movement.set')} 12-10-8-6`,
      gif: gifs.shoulderPressGif,
      bg: images.shoulderBg,
      movement:"shoulderPress",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Lateral Press",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.lateralPressGif,
      bg: images.shoulderBg,
      movement:"lateralPress",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Bent Over Raise",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.bentOverRaiseGif,
      bg: images.shoulderBg,
      movement:"bentOverRaise",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Upright Row",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.uprightRowGif,
      bg: images.shoulderBg,
      movement:"uprightRow",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Z Bar Lying",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.zBarLyingGif,
      bg: images.tricepsBg,
      movement:"zBarLying",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Dumbell Triceps",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.dumbellTrecepsGif,
      bg: images.tricepsBg,
      movement:"dumbellTriceps",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Pushdown",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.pushDownGif,
      bg: images.tricepsBg,
      movement:"pushDown",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Squat",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.barbellSquatGif,
      bg: images.legsBg,
      movement:"squat",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Legs Extension",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.legExtensionsGif,
      bg: images.legsBg,
      movement:"legsExtension",
      training:"shoulderTricepsLegs"
    },
    {
      title: "Legs Curl",
      subTitle: `3 ${i18n.t('training.movement.set')} 12-10-8`,
      gif: gifs.legsCurlGif,
      bg: images.legsBg,
      movement:"legsCurl",
      training:"shoulderTricepsLegs"
    }
  ];

  return { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData };
};

export default useSportCardsData;
