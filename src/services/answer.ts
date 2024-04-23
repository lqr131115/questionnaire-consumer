import { post } from "@/utils/ajax";

const POST_ANSWER_URL = "/mock/answer";

export async function postAnswer(data: any) {
  return await post(POST_ANSWER_URL, data);
}
