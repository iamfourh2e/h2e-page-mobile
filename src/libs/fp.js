export default FP = {
  Box: x => ({
    map: f => Right(f(x)),
    fold: f => f(x),
  }),
  Right: x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
  }),
  Left: x => ({
    chain: f => f(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
  }),
};
