import Footer from "@/app/components/footer";

export default function Map() {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7030.28991473859!2d83.98533949216278!3d28.233279603540037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594415fcee6db%3A0xea49186bb677b569!2sNadipur%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1759938249347!5m2!1sen!2snp"
          height="450"
          className="w-full mt-0 pt-2 p-4 px-18 py-10 "
        ></iframe>
      </div>
    </>
  );
}
