import Head from "next/head";
import { useMemo, useState } from "react";

const doctors = [
  {
    name: "Dr. Aziza Karimova",
    specialty: "Terapevt",
    time: "09:00 - 12:00",
    fee: "150 000 so‘m",
    note: "Yengil kasalliklar, isitma, qorin og‘rig‘i va umumiy tekshiruv",
  },
  {
    name: "Dr. Bobur Ismoilov",
    specialty: "Kardiolog",
    time: "10:00 - 14:00",
    fee: "200 000 so‘m",
    note: "Yurak urishi, bosim, qon aylanish va yurak mushaklari kasalliklari",
  },
  {
    name: "Dr. Nilufar Abdullayeva",
    specialty: "Pediatr",
    time: "11:00 - 15:00",
    fee: "180 000 so‘m",
    note: "Bolalar uchun isitma, nafas olish muammolari va o‘sish monitoringi",
  },
  {
    name: "Dr. Sardor Rahimov",
    specialty: "Ortoped",
    time: "13:00 - 16:00",
    fee: "220 000 so‘m",
    note: "Bo‘g‘im, suyak, jarohat va muskullar muammolari",
  },
  {
    name: "Dr. Maftuna Xayrullayeva",
    specialty: "Ginekolog",
    time: "09:30 - 13:30",
    fee: "210 000 so‘m",
    note: "Ayollar salomatligi, reproduktiv muammolar va profilaktika",
  },
  {
    name: "Dr. Jamshid Tursunov",
    specialty: "Nevrolog",
    time: "12:00 - 17:00",
    fee: "230 000 so‘m",
    note: "Bosh og‘rig‘i, asab tizimi muammolari va xavotir holatlari",
  },
];

const services = [
  "Tezkor tekshiruv",
  "Onlayn ro‘yxatdan o‘tish",
  "Laboratoriya testlari",
  "Davolash rejasini tuzish",
  "Kasalxona yotqizish bilan maslahat",
  "Profilaktika va nazorat tekshiruvi",
];

const specialties = [
  {
    title: "Yurak va qon tomir kasalliklari",
    key: "cardio",
    diseases: ["Yurak urishi", "Bosim", "Qon aylanish muammolari"],
  },
  {
    title: "Bolalar salomatligi",
    key: "pediatrics",
    diseases: ["Isitma", "Nafas olish muammolari", "O‘sish monitoringi"],
  },
  {
    title: "Ortopediya va travmatologiya",
    key: "ortho",
    diseases: ["Bo‘g‘im og‘rig‘i", "Suyak singan", "Mushak jarohati"],
  },
  {
    title: "Ayollar salomatligi",
    key: "gynecology",
    diseases: ["Reproduktiv muammolar", "Ayollar salomatligi", "Profilaktika"],
  },
  {
    title: "Nevrologiya",
    key: "neurology",
    diseases: ["Bosh og‘rig‘i", "Asab tizimi muammolari", "Xavotir holatlari"],
  },
  {
    title: "Umumiy terapiya",
    key: "therapy",
    diseases: ["Yengil kasalliklar", "Isitma", "Qorin og‘rig‘i"],
  },
];

const specialtyMap = {
  cardio: ["Kardiolog"],
  pediatrics: ["Pediatr"],
  ortho: ["Ortoped"],
  gynecology: ["Ginekolog"],
  neurology: ["Nevrolog"],
  therapy: ["Terapevt"],
};

export default function Home() {
  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctor: "",
    note: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const filteredDoctors = useMemo(() => {
    if (activeSpecialty === "all") return doctors;
    return doctors.filter((doctor) =>
      specialtyMap[activeSpecialty]?.includes(doctor.specialty),
    );
  }, [activeSpecialty]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.doctor.trim() ||
      !formData.note.trim()
    ) {
      setSubmitMessage("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    setSubmitMessage(
      `Rahmat, ${formData.name}! Ma'lumotlaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz.`,
    );
    setFormData({ name: "", phone: "", doctor: "", note: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Kilinika | Klinikaga murojat</title>
        <meta
          name="description"
          content="Kasal bo‘lsangiz kerakli shifokor, band vaqt va narxni toping."
        />
      </Head>

      <main
        id="top"
        className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_35%),linear-gradient(135deg,_#f8fffc_0%,_#f1f5f9_100%)] text-slate-800"
      >
        <header className="sticky top-0 z-20 border-b border-emerald-100/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-lg font-black text-white shadow-lg shadow-emerald-500/30">
                +
              </span>
              <span className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900">
                  Klinika
                </span>
                <span className="text-xs font-medium text-emerald-600">
                  Professional tibbiy yordam
                </span>
              </span>
            </a>

            <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm">
              <a
                href="#doctors"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Shifokorlar
              </a>
              <a
                href="#booking"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Band qilish
              </a>
              <a
                href="#about"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Biz haqimizda
              </a>
              <a
                href="#contact"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                Aloqa
              </a>
            </nav>

            <a
              href="#booking"
              className="hidden rounded-full bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:shadow-xl sm:inline-flex"
            >
              Qabulga yozilish
            </a>
          </div>
        </header>

        <section className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-8 lg:py-10">
          <div className="grid items-center gap-6 overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-emerald-100/70 blur-3xl" />
              <p className="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                Professional klinika xizmati
              </p>
              <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Tez, xavfsiz va ishonchli tibbiy yordam.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Yurak, nafas, bola salomatligi, ortopediya, ginekologiya va
                nevrologiya bo‘yicha mutaxassislar xizmat ko‘rsatadi.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#doctors"
                  className="rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  Shifokorlar bilan tanishish
                </a>
                <a
                  href="#booking"
                  className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Klinikaga yozilish
                </a>
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-2xl shadow-slate-900/20">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Bizning xizmatlar</h2>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  24/7
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {services.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2"
                  >
                    <span className="text-emerald-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-300">Birinchi konsultatsiya</p>
                <p className="text-2xl font-bold">150 000 so‘m</p>
              </div>
            </div>
          </div>

          <section className="grid gap-3 rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur md:grid-cols-3">
            <button
              type="button"
              onClick={() => setActiveSpecialty("all")}
              className={`rounded-2xl p-4 text-center text-sm font-semibold transition ${
                activeSpecialty === "all"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                  : "bg-slate-50 text-slate-800 hover:bg-emerald-50"
              }`}
            >
              Barcha mutaxassislar
            </button>
            {specialties.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveSpecialty(item.key)}
                className={`rounded-2xl p-4 text-center text-sm font-semibold transition ${
                  activeSpecialty === item.key
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "bg-slate-50 text-slate-800 hover:bg-emerald-50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </section>

          <section
            id="doctors"
            className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="rounded-[32px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 p-6 text-white shadow-[0_20px_60px_rgba(16,185,129,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                Mutaxassislar jamoasi
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Har bir kasallik uchun tegishli davolash yo‘li.
              </h2>
              <p className="mt-3 text-sm text-emerald-50">
                Quyidagi kasallik turlariga mos mutaxassislar mavjud. Ularni
                tanlang va kerakli doktorni ko‘ring.
              </p>

              <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Tanlangan bo‘lim:
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {activeSpecialty === "all"
                    ? "Barcha mutaxassislar"
                    : specialties.find((item) => item.key === activeSpecialty)
                        ?.title || "Barcha mutaxassislar"}
                </p>
                {activeSpecialty !== "all" ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {specialties
                      .find((item) => item.key === activeSpecialty)
                      ?.diseases.map((disease) => (
                        <span
                          key={disease}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium"
                        >
                          {disease}
                        </span>
                      ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {filteredDoctors.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600 md:col-span-2">
                  Ushbu mutaxassis bo‘yicha shifokorlar hozircha mavjud emas.
                </div>
              ) : (
                filteredDoctors.map((doctor) => (
                  <article
                    key={doctor.name}
                    className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{doctor.name}</h3>
                        <p className="text-emerald-600">{doctor.specialty}</p>
                      </div>
                      <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {doctor.time}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{doctor.note}</p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <p className="font-semibold text-slate-800">
                        Narxi: {doctor.fee}
                      </p>
                      <a
                        href="#booking"
                        className="rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                      >
                        Band qilish
                      </a>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>

          <section
            id="about"
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Klinika haqida
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Bizning klinika sizning salomatligingiz uchun har doim yaqin.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Klinika zamonaviy diagnostika, tezkor tekshiruvlar va
                  professional shifokorlar jamoasi bilan har qanday kasallikni
                  erta aniqlash va samarali davolashga yordam beradi. Bizda
                  bolalar salomatligi, yurak-qon tomir kasalliklari, ortopediya,
                  ginekologiya, nevrologiya va umumiy terapiya bo‘yicha
                  mutaxassislar ishlaydi.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Tezkor murojat
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Sizning shikoyatingizni tezkor aniqlab, eng yaxshi
                      davolash yo‘lini taklif qilamiz.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Xavfsiz xizmat
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Barcha tekshiruvlar va davolash usullari xavfsiz va
                      sifatli.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-linear-to-br from-emerald-600 to-teal-600 p-6 text-white shadow-lg">
                <h3 className="text-lg font-semibold">Nega bizni tanlaysiz?</h3>
                <ul className="mt-4 space-y-3 text-sm text-emerald-50">
                  <li>• 24/7 maslahat va tezkor yozilish imkoniyati</li>
                  <li>• Ishonchli va malakali shifokorlar jamoasi</li>
                  <li>• Zamonaviy texnologiyalar va aniq diagnostika</li>
                  <li>• Qulay joylashuv va qulay narxlar</li>
                </ul>
                <a
                  href="#booking"
                  className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Qabulga yozilish
                </a>
              </div>
            </div>
          </section>

          <section
            id="booking"
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Band qilish
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Qabulga yozilish uchun ma’lumot qoldiring
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  Ma’lumotlaringizni yuboring, biz siz bilan tez orada
                  bog‘lanamiz.
                </p>
              </div>
              <form
                className="grid gap-3 rounded-[24px] bg-slate-50 p-4"
                onSubmit={handleSubmit}
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Ismingiz
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                    placeholder="Ismingiz"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Telefon raqamingiz
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                    placeholder="Telefon raqamingiz"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Shifokor tanlang
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">Shifokor tanlang</option>
                    <option value="Dr. Aziza Karimova">
                      Dr. Aziza Karimova
                    </option>
                    <option value="Dr. Bobur Ismoilov">
                      Dr. Bobur Ismoilov
                    </option>
                    <option value="Dr. Nilufar Abdullayeva">
                      Dr. Nilufar Abdullayeva
                    </option>
                    <option value="Dr. Sardor Rahimov">
                      Dr. Sardor Rahimov
                    </option>
                    <option value="Dr. Maftuna Xayrullayeva">
                      Dr. Maftuna Xayrullayeva
                    </option>
                    <option value="Dr. Jamshid Tursunov">
                      Dr. Jamshid Tursunov
                    </option>
                  </select>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Muammo yoki shikoyatingiz
                  </label>
                  <textarea
                    className="min-h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                    placeholder="Muammo yoki shikoyatingiz"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Yuborish
                </button>
                {submitMessage ? (
                  <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                    {submitMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </section>

          <section
            id="contact"
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Aloqa
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Klinikaga kelish yoki qo‘ng‘iroq qilish
                </h2>
                <p className="mt-3 text-slate-600">
                  Manzil: Toshkent sh., Bobur ko‘chasi 15-a. Ish vaqti: har kuni
                  08:00 dan 20:00 gacha.
                </p>
              </div>
              <div className="rounded-[24px] bg-slate-900 p-6 text-white shadow-lg shadow-slate-900/20">
                <p className="text-sm text-slate-300">Telefon</p>
                <a
                  href="tel:+998901112233"
                  className="mt-1 block text-2xl font-semibold"
                >
                  +998 90 111 22 33
                </a>
                <p className="mt-4 text-sm text-slate-300">
                  Telegram: @kilinika_clinic
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xl font-semibold text-white">Klinika</p>
            <p className="mt-3 max-w-md text-sm leading-6">
              Tez, xavfsiz va professional tibbiy yordam. Siz uchun eng yaxshi
              mutaxassislar jamoasi hozir tayyor.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Navigatsiya</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="#doctors" className="transition hover:text-emerald-400">
                Shifokorlar
              </a>
              <a href="#booking" className="transition hover:text-emerald-400">
                Band qilish
              </a>
              <a href="#contact" className="transition hover:text-emerald-400">
                Aloqa
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Aloqa</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href="tel:+998901112233"
                className="transition hover:text-emerald-400"
              >
                +998 90 111 22 33
              </a>
              <a
                href="mailto:info@klinika.uz"
                className="transition hover:text-emerald-400"
              >
                info@klinika.uz
              </a>
              <p>Toshkent sh., Bobur ko‘chasi 15-a</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
