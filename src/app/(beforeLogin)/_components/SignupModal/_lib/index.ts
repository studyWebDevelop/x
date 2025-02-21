"use server";

import { redirect } from "next/navigation";

export const onSubmit = async (
  state: { message: string } | undefined,
  formData: FormData
) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }

  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }

  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }

  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  console.log("formData", formData);

  let isRedirect = false;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "POST",
        body: formData,
        credentials: "include", // 쿠키 전달을 위해 사용
      }
    );

    isRedirect = true;

    console.log("response", response.status);
    console.log(await response.json());
  } catch (error) {
    console.log("error", error);
  }

  if (isRedirect) redirect("/home"); // try/catch 문 안에서는 사용하면 안됨
};
