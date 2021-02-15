import ActionButton from "antd/lib/modal/ActionButton";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJJVzIoSW3WKqYCBus2KAH9clwKirxpzniA&usqp=CAU",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://static01.nyt.com/images/2019/01/10/fashion/10LBM1911-1/merlin_148902108_0b7ce85d-1ab1-4f91-adcf-6c75b6430dc5-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1577208288347-b24488f3efa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://cdn.trendhunterstatic.com/thumbs/menswear-ecommerce.jpeg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, acton) => {
  switch (ActionButton.type) {
    default:
      return state;
  }
};

export default directoryReducer;
