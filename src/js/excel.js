const runMacro = async (context, macroName, macroParams) => {
  const wb = context.workbook;
  await wb.application.run(macroName, macroParams);
};
