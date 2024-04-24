import { get } from "@/utils/ajax";

const GET_QUESTION_URL = "/mock/question";

export async function getQuestion(id: string) {
  return await get(`${GET_QUESTION_URL}/${id}`);
}
