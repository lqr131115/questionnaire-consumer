import type { NextApiRequest, NextApiResponse } from "next";

function getAnswerInfo(body: any) {
  const info: any = {
    qnId: body.qnId,
    answerList: [],
  };
  for (const key in body) {
    if (key === "qnId") {
      continue;
    }
    info.answerList.push({ componentId: key, value: body[key] });
  }
  return info;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(200).json({ message: "Method Not Allowed" });
    return;
  }
  // 获取Form Data, 提交服务器
  const answerInfo = getAnswerInfo(req.body);
  try {
    console.log("answerInfo", answerInfo);
    res.redirect("/success");
  } catch (error) {
    res.redirect("/failed");
  }
}
