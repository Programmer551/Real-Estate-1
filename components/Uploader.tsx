import { writeFile } from "fs/promises";
import { join } from "path";
export default function ServerUploadPage() {
  async function upload(data: FormData) {
    "use server";

    const file: File | null = data.get("file") as unknown as File;
    if (!file) {
      throw new Error("No file uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join("./", "public", file.name);
    await writeFile(path, buffer);
    // console.log(`open ${path} to see the uploaded file`);

    return { success: true };
  }

  return (
    <main>
      {/* <p>React Server Component: Upload</p> */}
      <form action={upload}>
        {/* <input
          type='file'
          name='file'
          className=''
        /> */}
        <input
          type='file'
          name='file'
          className='file-input file-input-bordered file-input-error w-full max-w-xs'
        />
        <input
          type='submit'
          value='Upload'
          className='btn theme-background border-orange-600 btn-error m-2'
        />
      </form>
    </main>
  );
}
