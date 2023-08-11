function getUsers(req, res) {
  try {
    const options = {
      params: req.params,
      query: req.query,
      body: req.body,
      headers: req.headers,
    };

    const { id } = req.query;

    if (!id) { res.status(400).json({ error: 'Falta el parámetro ID' }); }

    res.status(200).json({ options, id });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error durante la solicitud' });
  }
}

module.exports = { getUsers };
