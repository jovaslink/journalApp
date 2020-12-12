export const fileUp = async (file) => {
  const URL = "https://api.cloudinary.com/v1_1/drqrch61u/upload";
  const formData = new FormData();

  formData.append("upload_preset", "bmi5bgwd");
  formData.append("file", file);

  try {
    const resp = await fetch(URL, { method: "POST", body: formData });

    if (resp.ok) {
      const respCloud = await resp.json();
      return respCloud.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};
