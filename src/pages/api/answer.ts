import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/services/answer";

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
    postAnswer(answerInfo)
      .then(() => {
        res.redirect("/success");
      })
      .catch(() => {
        res.redirect("/fail");
      });
  } catch (error) {
    res.redirect("/fail");
  }
}
