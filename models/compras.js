const { Schema, model } = require("mongoose");

const ComprasSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  producto: {
    type: Schema.Types.Array,
    ref: "Producto",
    required: true,
  },
  estado: { type: Boolean, default: true },
});

module.exports = model("Compras", ComprasSchema);
