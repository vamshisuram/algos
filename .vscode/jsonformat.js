const schemadata = {
  company: {
    Company: {
      parents: [
        {
          path: "Query,company",
          filters: [
            {
              path: "Query,company",
              name: "id",
              type: "ID",
              required: false,
              default: "",
            },
          ],
        },
        { path: "Query,importedCompany,company", filters: [] },
      ],
      required: false,
      isArray: false,
      implementations: null,
      unionTypes: [],
    },
  },
};

const paths = [];

function format() {
  Object.keys(schemadata).forEach((key) => {
    const obj = schemadata[key]; // ko
    Object.keys(obj).forEach((k) => {
      const o = obj[k]; // ki
      o.parents.forEach((p) => {
        paths.push(p.path);
      });
    });
  });
  console.log(paths);
}

format();
