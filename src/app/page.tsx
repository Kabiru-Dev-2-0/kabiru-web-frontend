"use client";

import { useState } from "react";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/BreadCrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { DataTable, DataTableColumn } from "@/components/ui/DataTable";
import Dialog from "@/components/ui/Dialog";
import { InputField } from "@/components/ui/InputField";
import { LessonButton } from "@/components/ui/LessonButton";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ProgressTracker } from "@/components/ui/ProgressTracker";
import { RadioButton } from "@/components/ui/RadioButton";
import { SelectField } from "@/components/ui/SelectField";
import { Stepper } from "@/components/ui/Stepper";
import { SwitchButton } from "@/components/ui/SwitchButton";
import Tooltip from "@/components/ui/ToolTip";
import {
  ArrowRight,
  Search,
  House,
  BookOpen,
  Code2,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import DialogConfirmation from "@/components/ui/DialogConfirmation";
import Link from "next/link";

const options = [
  { label: "Select Option 1", value: "option-1" },
  { label: "Select Option 2", value: "option-2" },
  { label: "Select Option 3", value: "option-3" },
];

interface Material {
  name: string;
  category: string;
  level: string;
  duration: string;
  status: string;
}

const materials: Material[] = [
  {
    name: "Pengenalan Algoritma",
    category: "Algoritma",
    level: "Pemula",
    duration: "15 menit",
    status: "Selesai",
  },
  {
    name: "Struktur Percabangan",
    category: "Algoritma",
    level: "Menengah",
    duration: "20 menit",
    status: "Belum selesai",
  },
  {
    name: "Variabel dan Tipe Data",
    category: "Bahasa Pemrograman",
    level: "Pemula",
    duration: "10 menit",
    status: "Selesai",
  },
];

const columns: DataTableColumn<Material>[] = [
  {
    key: "name",
    header: "Nama Materi",
    rowHeader: true,
    width: "30%",
  },
  {
    key: "category",
    header: "Kategori",
  },
  {
    key: "level",
    header: "Tingkat",
  },
  {
    key: "duration",
    header: "Durasi",
  },
  {
    key: "status",
    header: "Status",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleConfirm = () => {
    console.log("Input:", input);
    setIsOpen(false);
  };

  const handleDelete = () => {
    // Jalankan proses penghapusan di sini.
    console.log("Materi dihapus");
    setIsOpen(false);
  };

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Membuka dialog konfirmasi.
  const handleOpenDialog = () => {
    setMessage("");
    setIsOpen(true);
  };

  // Membatalkan dan menutup dialog.
  const handleCloseDialog = () => {
    if (isSaving) return;

    setIsOpen(false);
  };

  // Menjalankan proses ketika tombol Simpan ditekan.

  const handleSubmit = async () => {
    if (isSaving) return;

    setIsSaving(true);
    setMessage("");

    try {
      // Simulasi proses penyimpanan selama 1 detik.
      // Ganti bagian ini dengan request API sebenarnya.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Perubahan berhasil disimpan.");
      setIsOpen(false);
    } catch {
      setMessage("Gagal menyimpan perubahan. Silakan coba lagi.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 p-20 gap-8 bg-zinc-50 font-sans ">
      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center rounded-lg bg-[#277BC0] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2370AF]"
      >
        Masuk ke Halaman Learner
      </Link>

      <p className="text-display-1 text-primary-default">halo dunia</p>
      <div className="flex gap-4">
        <Button variant="primary" rightIcon={<ArrowRight size={16} />}>
          Lanjutkan
        </Button>
        <Button variant="success" rightIcon={<ArrowRight size={16} />}>
          Lanjutkan
        </Button>
        <Button variant="warning" rightIcon={<ArrowRight size={16} />}>
          Lanjutkan
        </Button>
        <Button variant="error" rightIcon={<ArrowRight size={16} />}>
          Lanjutkan
        </Button>
        <Button variant="success-outline" rightIcon={<ArrowRight size={16} />}>
          Lanjutkan
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Checkbox
          variant="primary"
          size="sm"
          aria-label="Small checkbox"
          defaultChecked
        />
        <Checkbox variant="success" size="sm" aria-label="Medium checkbox" />
        <Checkbox variant="error" size="lg" aria-label="Small checkbox" />
      </div>
      <div className="flex items-center gap-4">
        <RadioButton name="primary" value="1" variant="primary" size="md" />
        <RadioButton name="success" value="1" variant="success" size="md" />
        <RadioButton name="error" value="1" variant="error" size="md" />
        <RadioButton name="warning" value="1" variant="warning" size="md" />
        <RadioButton name="disabled" value="1" variant="disabled" size="md" />
      </div>

      <Card padding={24} color="#F0F1F3" border={true} shadow>
        <h2 className="text-heading font-semibold">Studi Kasus</h2>
        <p className="mt-2 text-paragraph">
          Selesaikan studi kasus setelah mempelajari materi.
        </p>
      </Card>

      <InputField
        requiredMark
        label="Cari materi"
        placeholder="Cari..."
        icon={<Search size={18} />}
        iconPosition="left"
      />
      <InputField
        label="Nama materi"
        state="error"
        defaultValue="$#@!"
        errorMessage="Error message"
      />
      <InputField
        label="Nama materi"
        state="disabled"
        placeholder="Input tidak tersedia"
      />

      <SelectField
        label="SelectTextField"
        requiredMark
        placeholder="Select Text"
        groupLabel="LabelTextField"
        options={options}
      />

      <SelectField
        label="Kategori Materi"
        placeholder="Pilihan tidak tersedia"
        options={options}
        disabled
      />

      <SelectField label="Ukuran kecil" options={options} selectSize="sm" />

      <SelectField label="Ukuran sedang" options={options} selectSize="md" />

      <SelectField label="Ukuran besar" options={options} selectSize="lg" />

      <div className="flex items-center gap-4">
        <SwitchButton size="sm" variant="basic" aria-label="Switch basic" />

        <SwitchButton
          size="md"
          variant="primary"
          defaultChecked
          aria-label="Switch primary"
        />

        <SwitchButton
          size="lg"
          variant="success"
          defaultChecked
          aria-label="Switch success"
        />
      </div>
      <div className="flex flex-col gap-6">
        <ProgressBar variant="primary" value={80} detail="4/6" />
        <ProgressBar variant="success" size="md" value={60} detail="3/5" />
        <ProgressBar variant="error" size="lg" value={40} detail="2/5" />
        <ProgressBar loading size="lg" />
        <ProgressBar variant="skeleton" size="lg" />
      </div>

      <Breadcrumbs
        items={[
          { label: "First Item", href: "/first" },
          { label: "Second Item", href: "/second" },
          { label: "Third Item" },
        ]}
      />
      <Breadcrumbs
        showIcons
        items={[
          { label: "Beranda", href: "/", icon: House },
          { label: "Practice", href: "/practice", icon: BookOpen },
          { label: "Algoritma", icon: Code2 },
        ]}
      />
      <Breadcrumbs
        withBackground
        highlightCurrentBackground
        background="white"
        currentBackground="gray-200"
        items={[
          { label: "Beranda", href: "/" },
          { label: "Practice", href: "/practice" },
          { label: "Algoritma" },
        ]}
      />

      <div className="flex flex-wrap items-center gap-3">
        <ProgressTracker value={0} variant="pie" />
        <ProgressTracker value={25} variant="pie" />
        <ProgressTracker value={50} variant="pie" />
        <ProgressTracker value={75} variant="pie" />
        <ProgressTracker value={100} variant="pie" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ProgressTracker size={120} ringWidth={12} value={0} variant="donut" />
        <ProgressTracker value={25} variant="donut" />
        <ProgressTracker value={50} variant="donut" />
        <ProgressTracker value={75} variant="donut" />
        <ProgressTracker value={100} variant="donut" />
      </div>

      <DataTable
        columns={columns}
        data={materials}
        caption="Daftar materi pembelajaran"
        borderRadius="lg"
      />

      <DataTable
        columns={columns}
        data={materials}
        caption="Daftar materi pembelajaran"
        borderRadius="lg"
        headingBackground="var(--color-primary-default)"
        headingTextColor="#FFFFFF"
        rowBackground="var(--color-white)"
        borderColor="var(--color-neutral-100)"
        headerIcon={ChevronDown}
        // showHeaderIcons={false}
      />

      <div className="mx-auto w-full max-w-210 p-8">
        <Stepper totalSteps={10} />
      </div>

      <Stepper
        totalSteps={5}
        defaultValue={2}
        activeColor="#277BC0"
        inactiveColor="#E5E5E5"
        navSize={24}
        trackHeight={8}
        trackGap={12}
        navGap={20}
        trackRadius="9999px"
      />

      <div className="flex flex-wrap items-center gap-3">
        {/* Solid */}
        <Badge color="primary">Primary</Badge>
        <Badge color="accent">Accent</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="disabled">Disabled</Badge>

        {/* Outline */}
        <Badge size="md" color="primary-outline">
          Primary
        </Badge>
        <Badge size="lg" color="accent-outline">
          Accent
        </Badge>
        <Badge size="lg" color="success-outline">
          Success
        </Badge>
        <Badge size="lg" color="error-outline">
          Error
        </Badge>
        <Badge size="lg" color="warning-outline">
          Warning
        </Badge>
        <Badge size="lg" color="disabled-outline">
          Disabled
        </Badge>
      </div>

      <div className="inline-flex flex-col gap-8  p-5">
        <Alert
          variant="success"
          title="Lorem ipsum"
          description="lorem ipsum"
        />

        <Alert variant="fail" title="Lorem ipsum" description="lorem ipsum" />

        <Alert
          variant="warning"
          title="Lorem ipsum"
          description="lorem ipsum"
        />

        <Alert variant="help" title="Lorem ipsum" description="lorem ipsum" />

        <Alert
          variant="success"
          title="Materi berhasil disimpan"
          description="Perubahan Anda sudah tersimpan."
          width="320px"
          minHeight="80px"
          backgroundColor="#E6F8F2"
          textColor="#008559"
          borderColor="#008559"
          borderRadius="16px"
          padding="16px"
          gap="12px"
          iconSize={28}
          titleSize={14}
          descriptionSize={12}
        />
      </div>

      <div className="flex flex-wrap items-center gap-12 p-6">
        <LessonButton
          status="done"
          ariaLabel="Pelajaran 1 selesai"
          onClick={() => console.log("Buka pelajaran 1")}
        />

        <LessonButton
          status="current"
          number={0}
          ariaLabel="Pelajaran 2, saat ini"
          onClick={() => console.log("Buka pelajaran 2")}
        />

        <LessonButton status="locked" ariaLabel="Pelajaran 3 terkunci" />

        <LessonButton status="skeleton" />
      </div>

      <div className="flex gap-4">
        <Tooltip content="Tooltips">
          <button className="rounded-lg bg-primary-default px-4 py-2 text-white">
            Hover saya
          </button>
        </Tooltip>

        <Tooltip
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          placement="top"
          theme="default"
          size="big"
        >
          <button className="rounded-lg bg-primary-default px-4 py-2 text-white">
            Informasi
          </button>
        </Tooltip>

        <Tooltip
          content="Keterangan tambahan untuk elemen ini."
          placement="bottom"
          theme="light"
          size="small"
        >
          <button className="rounded-lg border border-primary-default px-4 py-2 text-primary-default">
            Lihat keterangan
          </button>
        </Tooltip>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-100 rounded-lg bg-primary-default px-4 py-2 text-white"
      >
        Buka Dialog
      </button>

      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        title="Lorem Ipsum"
        description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        showInput
        inputPlaceholder="Input Text"
        inputValue={input}
        onInputChange={setInput}
        cancelText="Batal"
        confirmText="Ya"
      /> */}

      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary-default text-white"
      >
        Hapus Materi
      </button>

      {/* <DialogConfirmation
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleDelete}
        title="Hapus Materi?"
        description="Apakah kamu yakin ingin menghapus materi ini?"
        cancelText="Batal"
        confirmText="Ya"
      /> */}

      {/* <DialogConfirmation
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        title="Jawaban Berhasil Dikirim"
        description="Jawabanmu sudah tersimpan. Kamu dapat melanjutkan ke tahap berikutnya."
        showCancelButton={false}
        confirmText="Mengerti"
      /> */}

      {/* <DialogConfirmation
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleDelete}
        title="Hapus Studi Kasus?"
        description="Tindakan ini akan menghapus studi kasus yang dipilih."
        variant="danger"
        cancelText="Jangan Hapus"
        confirmText="Hapus"
      /> */}

      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-xl font-semibold text-zinc-700">
          Demo Dialog Confirmation
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Contoh penggunaan dialog konfirmasi untuk menyimpan perubahan.
        </p>

        <button
          type="button"
          onClick={handleOpenDialog}
          className="rounded-lg bg-primary-default px-5 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          Simpan Perubahan
        </button>

        {message && (
          <p role="status" className="mt-4 text-sm text-gray-700">
            {message}
          </p>
        )}
      </div>

      <DialogConfirmation
        open={isOpen}
        onClose={handleCloseDialog}
        onConfirm={handleSubmit}
        title="Simpan Perubahan?"
        description="Perubahan akan disimpan ke sistem."
        cancelText="Batal"
        confirmText="Simpan"
        isLoading={isSaving}
      />
    </div>
  );
}
