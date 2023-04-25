const { nanoid } = require("nanoid");
const yup = require("yup");
const urls = require("../schema/urlSchema");

const schema = yup.object({
  slug: yup.string().trim(),
  url: yup.string().trim().url().required(),
});

const formatUrl = async (req, res) => {
  var { slug, url } = req.body;
  //   console.log(req.body);
  await schema.validate({ slug, url });
  if (!slug) {
    slug = nanoid(10);
  } else {
    const existing = urls.find({ slug });

    if (existing) {
      //   throw new Error("Slug in use");
      console.log("slug in use");
    }
  }
  slug = slug.toLowerCase();
  const created = await urls.create({ slug, url });
  res.json(created);
  //   console.log(slug);
};

const redirect = async (req, res) => {
  const { id: slug } = req.params; //assigning id to params
  try {
    const url = await urls.findOne({ slug });
    if (url) {
      console.log(url);
      return res.redirect(url.url);
    }
  } catch (error) {}
};

module.exports = { formatUrl, redirect };
