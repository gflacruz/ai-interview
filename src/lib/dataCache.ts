type CacheTag = "users" | "questions" | "jobInfos" | "interviews";

export function getGlobalTag(tag: CacheTag) {
  return `global:${tag}` as const;
}

export function getUserTag(tag: CacheTag, userId: string) {
  return `user:${tag}:${userId}` as const;
}

export function getIdTag(tag: CacheTag, id: string) {
  return `id:${tag}:${id}` as const;
}
