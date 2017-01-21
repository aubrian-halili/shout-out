export const success = (res, entity) => {
  res.status(200).json(entity);
};

export const error = (res, entity) => {
  res.status(500).json(entity);
};

export const notFound = (res) => {
  res.status(404).end();
};
