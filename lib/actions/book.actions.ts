"use server";

// Stub: Book server actions — implement when backend (MongoDB) is connected

export async function checkBookExists(_title: string): Promise<{
  exists: boolean;
  book: { slug: string } | null;
}> {
  return { exists: false, book: null };
}

export async function createBook(data: Record<string, unknown>): Promise<{
  success: boolean;
  alreadyExists?: boolean;
  error?: string;
  isBillingError?: boolean;
  data: { _id: string; slug: string };
}> {
  return {
    success: true,
    alreadyExists: false,
    data: { _id: "stub", slug: String(data.title) },
  };
}

export async function saveBookSegments(
  _bookId: string,
  _clerkId: string,
  _content: unknown[],
) {
  return { success: true };
}
