const GET = (req, res) => {
  // res.status(200).json({ text: 'Hello' });
  const out = {
    text: 'Hello',
  };
  res.status(200).json(out);
};

export { GET };
