const getUserData = state => state.calculator.userData;
const getFullCalculator = state => state.calculator;
const getLoaderStatus = state => state.calculator.loaderShow;
const getUserInfo = state => state.calculator.userInfo;
const getIsModalOpen = state => state.calculator.isModalOpen;
const calcSelectors = { getIsModalOpen, getUserData, getFullCalculator, getLoaderStatus,getUserInfo };

export default calcSelectors;
