ki require core

ki (defn GetContext [canvas]
    (chain canvas (getContext "2d")));

ki (defn GetCanvas [id]
    (chain document (getElementById id)));

ki (defn BeginPath [ctx]
    (doto ctx (beginPath)));

ki (defn Fill [ctx]
    (doto ctx (fill)));

ki (defn FillStyle [ctx color]
    (js ctx.fillStyle = color)
    ctx);

ki (defn MoveTo [ctx x y]
    (doto ctx (moveTo x y)));

ki (defn LineTo [ctx x y]
    (doto ctx (lineTo x y)));

ki (defn FillRect [ctx x y w h]
    (doto ctx (fillRect x y w h)));

// Side-effects in da sky
ki (letv [ctx (GetContext (GetCanvas "the-canvas"))]
    (do
      // Sky
      (FillStyle ctx "#0000ff")
      (FillRect ctx 0 0 200 200)
      // Snow
      (FillStyle ctx "#fff")
      (loop [i 10]
       (FillRect ctx (mul i 20) (mul (chain Math (random)) 100) 10 10)
       (when (geq i 0)
        (recur (dec i))))));

// No side-effects in da house
ki (Fill
    (LineTo
     (LineTo
      (MoveTo
       (BeginPath
        (GetContext
         (GetCanvas "the-canvas")))
       40 100)
      160 100)
     100 50));

ki (FillRect
    (GetContext
     (GetCanvas "the-canvas"))
    50 100 100 50);
