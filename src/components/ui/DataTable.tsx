import * as React from "react";
import { ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TableRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface DataTableColumn<T> {
  /** Key data yang ditampilkan pada kolom */
  key: keyof T;

  /** Judul kolom */
  header: React.ReactNode;

  /** Mengatur tampilan nilai secara khusus */
  render?: (row: T, index: number) => React.ReactNode;

  /** Menjadikan kolom pertama sebagai heading baris */
  rowHeader?: boolean;

  /** Menampilkan icon pada heading kolom */
  icon?: LucideIcon | null;

  /** Mengaktifkan callback saat heading diklik */
  sortable?: boolean;

  /** Lebar kolom, contoh: "200px" atau "25%" */
  width?: string | number;

  /** Alignment isi kolom */
  align?: "left" | "center" | "right";

  /** Class tambahan untuk kolom */
  className?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];

  /** Warna background seluruh tabel */
  background?: string;

  /** Warna background heading */
  headingBackground?: string;

  /** Warna background isi baris */
  rowBackground?: string;

  /** Warna background baris saat hover */
  rowHoverBackground?: string;

  /** Warna border antarbaris */
  borderColor?: string;

  /** Warna teks heading */
  headingTextColor?: string;

  /** Warna teks kolom pertama */
  rowHeadingTextColor?: string;

  /** Warna teks kolom lainnya */
  bodyTextColor?: string;

  /** Radius sudut tabel */
  borderRadius?: TableRadius;

  /** Lebar minimum tabel */
  minWidth?: string | number;

  /** Padding horizontal setiap sel dalam pixel */
  cellPaddingX?: number;

  /** Padding vertikal setiap sel dalam pixel */
  cellPaddingY?: number;

  /** Tinggi minimum heading dalam pixel */
  headingHeight?: number;

  /** Tinggi minimum baris dalam pixel */
  rowHeight?: number;

  /** Ukuran teks dalam pixel */
  fontSize?: number;

  /** Ukuran icon heading dalam pixel */
  iconSize?: number;

  /** Tampilkan icon default pada heading */
  showHeaderIcons?: boolean;

  /** Icon default heading */
  headerIcon?: LucideIcon;

  /** Callback ketika heading sortable diklik */
  onSort?: (key: keyof T) => void;

  /** Caption untuk aksesibilitas tabel */
  caption?: string;

  /** Pesan ketika data kosong */
  emptyMessage?: React.ReactNode;

  /** Class tambahan untuk pembungkus tabel */
  className?: string;

  /** Class tambahan untuk elemen tabel */
  tableClassName?: string;

  /** Class tambahan untuk heading tabel */
  headingClassName?: string;

  /** Class tambahan untuk setiap baris */
  rowClassName?: string;

  /** Class tambahan untuk setiap sel */
  cellClassName?: string;
}

const radiusValues: Record<TableRadius, string> = {
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
};

export function DataTable<T extends object>({
  columns,
  data,
  background = "#FFFFFF",
  headingBackground = "#E5E5E5",
  rowBackground = "#FFFFFF",
  rowHoverBackground,
  borderColor = "#F5F5F5",
  headingTextColor = "#888E9B",
  rowHeadingTextColor = "#3A3F48",
  bodyTextColor = "#888E9B",
  borderRadius = "none",
  minWidth = "640px",
  cellPaddingX = 24,
  cellPaddingY = 12,
  headingHeight = 44,
  rowHeight = 39,
  fontSize = 12,
  iconSize = 16,
  showHeaderIcons = true,
  headerIcon: HeaderIcon = ArrowDown,
  onSort,
  caption,
  emptyMessage = "Tidak ada data.",
  className = "",
  tableClassName = "",
  headingClassName = "",
  rowClassName = "",
  cellClassName = "",
}: DataTableProps<T>) {
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);

  return (
    <div
      className={["w-full overflow-x-auto", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundColor: background,
        borderRadius: radiusValues[borderRadius],
      }}
    >
      <table
        className={["w-full border-collapse text-left", tableClassName]
          .filter(Boolean)
          .join(" ")}
        style={{
          minWidth,
          tableLayout: "fixed",
          fontSize,
          fontFamily: "var(--font-family-sans, Sora, system-ui, sans-serif)",
        }}
      >
        {caption && <caption className="sr-only">{caption}</caption>}

        <thead>
          <tr>
            {columns.map((column, index) => {
              const Icon = column.icon === undefined ? HeaderIcon : column.icon;

              const showIcon =
                column.icon === null
                  ? false
                  : column.sortable
                    ? true
                    : showHeaderIcons && Boolean(Icon);

              return (
                <th
                  key={String(column.key)}
                  scope="col"
                  className={[
                    "font-medium leading-normal",
                    headingClassName,
                    column.className ?? "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    height: headingHeight,
                    padding: `${cellPaddingY}px ${cellPaddingX}px`,
                    backgroundColor: headingBackground,
                    color: headingTextColor,
                    borderBottom: `1px solid ${borderColor}`,
                    textAlign: column.align ?? "left",
                    verticalAlign: "middle",
                    whiteSpace: "nowrap",
                    width: column.width,
                  }}
                >
                  {column.sortable && onSort ? (
                    <button
                      type="button"
                      onClick={() => onSort(column.key)}
                      className="inline-flex items-center gap-1 text-inherit"
                    >
                      <span>{column.header}</span>
                      {showIcon && Icon && (
                        <Icon
                          aria-hidden="true"
                          size={iconSize}
                          className="shrink-0"
                        />
                      )}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <span>{column.header}</span>
                      {showIcon && Icon && (
                        <Icon
                          aria-hidden="true"
                          size={iconSize}
                          className="shrink-0"
                        />
                      )}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={Math.max(columns.length, 1)}
                className="text-center"
                style={{
                  padding: `${cellPaddingY}px ${cellPaddingX}px`,
                  color: bodyTextColor,
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowClassName}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  backgroundColor:
                    hoveredRow === rowIndex && rowHoverBackground
                      ? rowHoverBackground
                      : rowBackground,
                }}
              >
                {columns.map((column) => {
                  const content = column.render
                    ? column.render(row, rowIndex)
                    : (row[column.key] as React.ReactNode);

                  const isRowHeader = column.rowHeader ?? false;

                  const sharedStyle: React.CSSProperties = {
                    height: rowHeight,
                    padding: `${cellPaddingY}px ${cellPaddingX}px`,
                    borderBottom: `1px solid ${borderColor}`,
                    textAlign: column.align ?? "left",
                    verticalAlign: "middle",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: isRowHeader ? rowHeadingTextColor : bodyTextColor,
                    fontWeight: isRowHeader ? 500 : 400,
                    lineHeight: isRowHeader ? "normal" : 1.5,
                    width: column.width,
                  };

                  return isRowHeader ? (
                    <th
                      key={String(column.key)}
                      scope="row"
                      className={[cellClassName, column.className ?? ""]
                        .filter(Boolean)
                        .join(" ")}
                      style={sharedStyle}
                    >
                      {content}
                    </th>
                  ) : (
                    <td
                      key={String(column.key)}
                      className={[cellClassName, column.className ?? ""]
                        .filter(Boolean)
                        .join(" ")}
                      style={sharedStyle}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
