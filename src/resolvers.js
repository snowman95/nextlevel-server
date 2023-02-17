const resolvers = {
  Query: {
    photos: (_, { page }, { dataSources }) => {
      return dataSources.jsonPlaceholderAPI.getPhotosByPage(page);
    },
    posts: (_, __, { dataSources }) => {
      return dataSources.jsonPlaceholderAPI.getPosts();
    },
    animals: () => {
      return [{ id: 1, firstName: "dodo", type: "turtle", accessory: "hat" }];
    },
    assets: (_, { id }) => {
      return [
        {
          id,
          x: 127.061621658,
          y: 37.507968429,
          name: "NH금융타워(타워2)",
          address: "서울 영등포 여의도",
          date: "2022.3",
          price: 1380000,
          view: 10,
          src: `https://picsum.photos/id/${id}/374/150`,
          detail: {
            address: "서울특별시 서초구 양재동 11-149",
            mainUse: "업무시설",
            buildType: "토지건물",
            approvalDate: "2012. 7. 9",
            landArea: "3,502.90m2 (1,059.62평)",
            buildingArea: "44,093.47m2 (13,321.94평)",
            statutoryFloorAreaRatio: 800,
            currentStatusFloorAreaRatio: 764,
            scale: "지하 6층 / 지상 20층",

            dealAmount: 40000000,
            dealPoint: "2022. 1. 18",
            buildingDealArea: "44,093.47m2 (13,338.27평)",
            buildingDealUnitPrice: "907만원/m2 (3000만원/평)",
            landDealArea: "3,502.90m2 (1,059.63평)",
            landDealUnitPrice: "1억1419만원/m2 (3억7750만원/평)",
            dealType: "토지건물 통거래",

            registrationReason: "2022.01.18",
            registrationReceipt: "2022.01.26",
            sell: "주식회사코크랩양재위탁관리부동산투자회사",
            buy: "주식회사코람코지속성장오피스제1의2호위탁관리자부동산투자회사",

            source:
              "건축물대장 공공데이터, 실거래가 공개시스템, 등기사항증명서",
            notes: [
              "2021년 설정된 코람코지속성장오피스리츠에 편입",
              "SPC그룹, 휠라코리아 본사 건물",
            ],
          },
        },
      ];
    },
  },
};

module.exports = resolvers;
