export default (mongoose) => {
  // criação do modelo
  const studentSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0)
          throw new console.error('Valor negativo para a nota nao permitido');
      },
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });
  // definindo o modelo da colecao
  const studentModel = mongoose.model('student', studentSchema);
  return studentModel;
};
