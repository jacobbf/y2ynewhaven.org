var isInViewport = function (elem) {
  let bounding = elem.getBoundingClientRect();
  return  (
      bounding.bottom >= 0
  );
};
