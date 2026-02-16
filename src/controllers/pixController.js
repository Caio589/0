exports.listarPagamentos = async (req, res) => {
  const result = await db.query(
    "SELECT * FROM payments ORDER BY created_at DESC"
  );
  res.json(result.rows);
};
