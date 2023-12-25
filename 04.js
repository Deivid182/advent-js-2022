
function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => {
    return (b.l + b.w + b.h) - (a.l + a.w + a.h)
  }).slice(1).every((box, i) =>{
      return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
  })
}

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 3, h: 3 },
  ])
);
