from pathlib import Path

from reportlab.lib.colors import HexColor, Color
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "enque-ai-site-flow.pdf"
PAGE_W = 13.333 * inch
PAGE_H = 7.5 * inch

PURPLE = HexColor("#5B19E6")
PURPLE_DARK = HexColor("#32108B")
PURPLE_SOFT = HexColor("#F1EDFF")
BLUE = HexColor("#1769E0")
BLUE_SOFT = HexColor("#EAF3FF")
ORANGE = HexColor("#F47A21")
ORANGE_SOFT = HexColor("#FFF2E8")
GREEN = HexColor("#159A70")
GREEN_SOFT = HexColor("#EAF8F3")
INK = HexColor("#11131A")
MUTED = HexColor("#626878")
LINE = HexColor("#D9DCE5")
WHITE = HexColor("#FFFFFF")
BLACK_BG = HexColor("#080D14")


def register_fonts():
    regular = Path(r"C:\Windows\Fonts\arial.ttf")
    bold = Path(r"C:\Windows\Fonts\arialbd.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("EnqueSans", str(regular)))
        pdfmetrics.registerFont(TTFont("EnqueSans-Bold", str(bold)))
        return "EnqueSans", "EnqueSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()


def para_style(size, color=INK, leading=None, bold=False, align=TA_LEFT):
    return ParagraphStyle(
        name=f"s-{size}-{color}-{bold}-{align}",
        fontName=FONT_BOLD if bold else FONT,
        fontSize=size,
        leading=leading or size * 1.22,
        textColor=color,
        alignment=align,
        spaceAfter=0,
        spaceBefore=0,
    )


def paragraph(c, text, x, y_top, width, size=13, color=INK, bold=False,
              leading=None, align=TA_LEFT, max_height=1000):
    p = Paragraph(text, para_style(size, color, leading, bold, align))
    _, h = p.wrap(width, max_height)
    p.drawOn(c, x, y_top - h)
    return h


def rounded(c, x, y, w, h, fill=WHITE, stroke=LINE, radius=10, line=1):
    c.setLineWidth(line)
    c.setStrokeColor(stroke)
    c.setFillColor(fill)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def pill(c, text, x, y, fill, color=WHITE, width=None):
    c.setFont(FONT_BOLD, 8.5)
    width = width or c.stringWidth(text, FONT_BOLD, 8.5) + 20
    c.setFillColor(fill)
    c.roundRect(x, y, width, 22, 11, fill=1, stroke=0)
    c.setFillColor(color)
    c.drawCentredString(x + width / 2, y + 7, text)
    return width


def page_header(c, kicker, title, subtitle=None, dark=False):
    ink = WHITE if dark else INK
    muted = HexColor("#C6CBD8") if dark else MUTED
    c.setFillColor(PURPLE)
    c.roundRect(42, PAGE_H - 50, 7, 7, 3.5, fill=1, stroke=0)
    c.setFont(FONT_BOLD, 9)
    c.setFillColor(PURPLE if not dark else HexColor("#B896FF"))
    c.drawString(58, PAGE_H - 50, kicker.upper())
    paragraph(c, title, 42, PAGE_H - 70, PAGE_W - 84, 25, ink, True, 29)
    if subtitle:
        paragraph(c, subtitle, 42, PAGE_H - 105, PAGE_W - 84, 11.5, muted, False, 15)


def page_footer(c, page_no, source="ENQUE.AI SITE FLOW"):
    c.setStrokeColor(Color(1, 1, 1, alpha=0.13) if c._fillColorObj == WHITE else LINE)
    c.setLineWidth(0.5)
    c.line(42, 24, PAGE_W - 42, 24)
    c.setFillColor(MUTED)
    c.setFont(FONT, 7.5)
    c.drawString(42, 11, source)
    c.drawRightString(PAGE_W - 42, 11, f"{page_no:02d}")


def arrow(c, x1, y1, x2, y2, color=PURPLE, width=2, dashed=False):
    c.setStrokeColor(color)
    c.setFillColor(color)
    c.setLineWidth(width)
    if dashed:
        c.setDash(5, 4)
    else:
        c.setDash()
    c.line(x1, y1, x2, y2)
    import math
    a = math.atan2(y2 - y1, x2 - x1)
    l = 7
    p1 = (x2 - l * math.cos(a - 0.5), y2 - l * math.sin(a - 0.5))
    p2 = (x2 - l * math.cos(a + 0.5), y2 - l * math.sin(a + 0.5))
    path = c.beginPath()
    path.moveTo(x2, y2)
    path.lineTo(*p1)
    path.lineTo(*p2)
    path.close()
    c.drawPath(path, fill=1, stroke=0)
    c.setDash()


def card(c, x, y, w, h, title, body="", accent=PURPLE, fill=WHITE,
         status=None, title_size=12, body_size=9.2):
    rounded(c, x, y, w, h, fill, LINE, 10, 0.8)
    c.setFillColor(accent)
    c.roundRect(x, y + h - 5, w, 5, 3, fill=1, stroke=0)
    if status:
        pill(c, status, x + w - 58, y + h - 28, accent, width=48)
    paragraph(c, title, x + 13, y + h - 22, w - 26, title_size, INK, True, title_size * 1.15)
    if body:
        paragraph(c, body, x + 13, y + h - 50, w - 26, body_size, MUTED, False, body_size * 1.26)


def bullet_list(c, items, x, y_top, width, color=INK, bullet_color=PURPLE,
                size=10.2, gap=7):
    y = y_top
    for item in items:
        c.setFillColor(bullet_color)
        c.circle(x + 3, y - 6, 2.5, fill=1, stroke=0)
        h = paragraph(c, item, x + 13, y, width - 13, size, color, False, size * 1.25)
        y -= h + gap
    return y


def draw_cover(c):
    c.setFillColor(PURPLE)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(Color(1, 1, 1, alpha=0.14))
    c.setLineWidth(1)
    for r in (80, 155, 230, 305):
        c.circle(0, PAGE_H / 2, r, fill=0, stroke=1)
        c.circle(PAGE_W, PAGE_H / 2, r, fill=0, stroke=1)
    pill(c, "WEBSITE + PRODUCT FLOW", 58, PAGE_H - 80, WHITE, PURPLE)
    paragraph(c, "enque.ai", 58, PAGE_H - 145, 500, 47, WHITE, True, 50)
    paragraph(c, "The Digital Workforce for Agency<br/>that Never Sleeps", 58, PAGE_H - 205, 680, 29, WHITE, False, 34)
    paragraph(
        c,
        "A source-of-truth narrative for the website, product architecture, "
        "orchestration loop, visitor journeys, and build roadmap.",
        58, 190, 520, 13, HexColor("#DED3FF"), False, 18,
    )
    c.setFillColor(WHITE)
    c.setFont(FONT_BOLD, 10)
    c.drawString(58, 55, "Prepared from the Enque product deck and supplied architecture maps")
    c.setFont(FONT, 8.5)
    c.setFillColor(HexColor("#D9CCFF"))
    c.drawRightString(PAGE_W - 58, 55, "AUGUST 2026")


def draw_story(c, page_no):
    page_header(c, "01 - POSITIONING", "Start with the agency problem, then reveal the system",
                "The site should move from a familiar pain to a credible, governed AI workforce.")
    left_x, top = 42, PAGE_H - 150
    rounded(c, left_x, 83, 260, 305, PURPLE, PURPLE, 16, 0)
    paragraph(c, "Agency has digital marketing,<br/>but no digital employees.", left_x + 22,
              top, 215, 22, WHITE, True, 26)
    paragraph(c, "Critical expertise stays in individuals. Context is fragmented. SOPs describe work but do not execute it. Delivery depends on constant human attention.",
              left_x + 22, 270, 215, 11, HexColor("#E4DAFF"), False, 15)
    pill(c, "THE OPENING TENSION", left_x + 22, 104, WHITE, PURPLE)

    steps = [
        ("1", "Problem", "Disconnected people, tools, knowledge and processes"),
        ("2", "Promise", "A digital workforce that understands the agency"),
        ("3", "Proof", "A four-tier system with reusable intelligence"),
        ("4", "Action", "Request a demo or explore the platform"),
    ]
    x = 332
    for i, (num, title, body) in enumerate(steps):
        y = 322 - i * 74
        c.setFillColor(PURPLE_SOFT)
        c.circle(x + 19, y + 21, 18, fill=1, stroke=0)
        c.setFillColor(PURPLE)
        c.setFont(FONT_BOLD, 12)
        c.drawCentredString(x + 19, y + 17, num)
        paragraph(c, title, x + 50, y + 39, 130, 13, INK, True, 15)
        paragraph(c, body, x + 50, y + 20, 360, 9.5, MUTED, False, 12)
        if i < len(steps) - 1:
            c.setStrokeColor(LINE)
            c.setLineWidth(1)
            c.line(x + 19, y + 2, x + 19, y - 29)
    rounded(c, 735, 83, 183, 305, HexColor("#F8F6FF"), HexColor("#D7CCFA"), 16, 1)
    paragraph(c, "Primary message", 754, 357, 145, 10, PURPLE, True)
    paragraph(c, "The Digital Workforce for Agency that Never Sleeps", 754, 326, 145, 18, INK, True, 21)
    paragraph(c, "Plan, execute, govern, and improve every kind of agency work from one expandable orchestration platform.",
              754, 230, 145, 10, MUTED, False, 14)
    pill(c, "REQUEST A DEMO", 754, 111, PURPLE, WHITE, 128)
    page_footer(c, page_no)


def draw_homepage(c, page_no):
    page_header(c, "02 - WEBSITE JOURNEY", "A homepage that earns understanding in eleven moves",
                "Each section answers the next question a buyer naturally asks.")
    sections = [
        ("01", "Hero", "What is it?"),
        ("02", "Agency problem", "Why now?"),
        ("03", "System map", "How is it organized?"),
        ("04", "Work", "What can we do?"),
        ("05", "Context", "What does it know?"),
        ("06", "Intelligence", "How does it act?"),
        ("07", "Control", "How is it governed?"),
        ("08", "Orchestration", "How does it improve?"),
        ("09", "Modularity", "Can it grow?"),
        ("10", "Build status", "What exists today?"),
        ("11", "Final CTA", "What should I do next?"),
    ]
    cols = 4
    w, h, gap_x, gap_y = 208, 86, 18, 18
    x0, y0 = 42, 333
    for idx, (num, title, question) in enumerate(sections):
        row, col = divmod(idx, cols)
        x = x0 + col * (w + gap_x)
        y = y0 - row * (h + gap_y)
        rounded(c, x, y, w, h, WHITE, LINE, 10, 0.8)
        c.setFillColor(PURPLE_SOFT)
        c.circle(x + 25, y + h - 24, 14, fill=1, stroke=0)
        c.setFillColor(PURPLE)
        c.setFont(FONT_BOLD, 8.5)
        c.drawCentredString(x + 25, y + h - 27, num)
        paragraph(c, title, x + 48, y + h - 17, 145, 12, INK, True, 14)
        paragraph(c, question, x + 18, y + 34, 175, 9.5, MUTED, False, 12)
        if idx < len(sections) - 1 and col < cols - 1:
            arrow(c, x + w + 4, y + h / 2, x + w + gap_x - 4, y + h / 2,
                  HexColor("#B8A5ED"), 1.2)
    rounded(c, 720, 125, 198, 86, PURPLE, PURPLE, 12, 0)
    paragraph(c, "Run your agency as one intelligent system.", 738, 190, 162, 15, WHITE, True, 18)
    pill(c, "REQUEST A DEMO", 738, 139, WHITE, PURPLE, 132)
    page_footer(c, page_no)


def draw_system(c, page_no):
    c.setFillColor(BLACK_BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    page_header(c, "03 - THE SYSTEM", "Four tiers. One governed operating model.",
                "Work creates outcomes. Context gives meaning. Intelligence moves work. Control keeps it accountable.", True)
    tiers = [
        ("TIER 4", "CONTROL", "Roles, agency admin, APIs, security and auditability", PURPLE),
        ("TIER 3", "INTELLIGENCE", "Skills, workflows, memory, routing, reasoning and learning", HexColor("#4CC9E8")),
        ("TIER 2", "CONTEXT", "Communication, knowledge, history, files and insights", HexColor("#55D6AF")),
        ("TIER 1", "WORK", "Demand, delivery, studio and optimization", ORANGE),
    ]
    x, w, h, gap, y0 = 62, PAGE_W - 124, 73, 14, 335
    for idx, (tier, name, body, color) in enumerate(tiers):
        y = y0 - idx * (h + gap)
        c.setFillColor(Color(color.red, color.green, color.blue, alpha=0.16))
        c.setStrokeColor(color)
        c.setLineWidth(1.3)
        c.roundRect(x, y, w, h, 12, fill=1, stroke=1)
        c.setFillColor(color)
        c.setFont(FONT_BOLD, 9)
        c.drawString(x + 18, y + 47, tier)
        c.setFont(FONT_BOLD, 17)
        c.setFillColor(WHITE)
        c.drawString(x + 88, y + 42, name)
        paragraph(c, body, x + 250, y + 52, w - 278, 10.5, HexColor("#D5DAE5"), False, 13)
        if idx < len(tiers) - 1:
            arrow(c, x + w - 30, y - 4, x + w - 30, y - gap + 4, color, 1.5)
    c.setFillColor(HexColor("#171D28"))
    c.roundRect(62, 43, PAGE_W - 124, 33, 9, fill=1, stroke=0)
    c.setFillColor(HexColor("#BFC6D5"))
    c.setFont(FONT_BOLD, 8.5)
    c.drawCentredString(PAGE_W / 2, 55, "CROSS-CUTTING GUARANTEES: ACCESS CONTROL  |  SECURITY  |  AUDIT LOGS  |  SCALABILITY  |  INTEGRATIONS")
    c.setFillColor(MUTED)
    c.setFont(FONT, 7.5)
    c.drawRightString(PAGE_W - 42, 11, f"{page_no:02d}")


def draw_work(c, page_no):
    page_header(c, "04 - TIER 1", "Work is where agency value is created",
                "Lead with outcomes buyers recognize, then show the expandable module families.")
    families = [
        ("DEMAND", "RFP & Tenders\nProspects", PURPLE, PURPLE_SOFT),
        ("DELIVERY", "Proposals\nProjects", BLUE, BLUE_SOFT),
        ("STUDIO", "Content\nMedia / Production", ORANGE, ORANGE_SOFT),
        ("OPTIMIZE", "Marketplace\nPerformance / Ads", GREEN, GREEN_SOFT),
    ]
    x0, y, w, h, gap = 42, 274, 207, 120, 18
    for i, (name, body, accent, fill) in enumerate(families):
        x = x0 + i * (w + gap)
        rounded(c, x, y, w, h, fill, accent, 12, 1.1)
        pill(c, name, x + 15, y + h - 34, accent, WHITE, 88)
        lines = body.split("\n")
        for j, line in enumerate(lines):
            paragraph(c, line, x + 17, y + 64 - j * 28, w - 34, 14, INK, True, 16)
        if i < len(families) - 1:
            arrow(c, x + w + 4, y + h / 2, x + w + gap - 4, y + h / 2, HexColor("#B6BAC5"), 1.2)
    paragraph(c, "Core execution loop", 42, 237, 160, 10, PURPLE, True)
    stages = ["Prospect", "Proposal", "Project", "Specialist delivery", "Outcome"]
    sx, sy, sw = 42, 158, 150
    for i, stage in enumerate(stages):
        x = sx + i * 180
        rounded(c, x, sy, sw, 50, WHITE, LINE, 10, 0.8)
        paragraph(c, stage, x + 10, sy + 32, sw - 20, 11, INK, True, 13, TA_CENTER)
        if i < len(stages) - 1:
            arrow(c, x + sw + 5, sy + 25, x + 175, sy + 25, PURPLE, 1.6)
    rounded(c, 42, 67, PAGE_W - 84, 61, HexColor("#F8F8FB"), LINE, 10, 0.8)
    paragraph(c, "Expandable by design", 58, 112, 150, 11, PURPLE, True)
    paragraph(c, "Social Media, SEO & Content, Web Development, CRM & Lifecycle, Audits, and agency-specific tools can be added without changing the shared foundation.",
              58, 94, PAGE_W - 116, 10, MUTED, False, 13)
    page_footer(c, page_no)


def draw_context(c, page_no):
    page_header(c, "05 - TIER 2", "Context is the agency's shared Second Brain",
                "Every module sees the same conversations, knowledge, histories, files, and insights.")
    modules = ["Communication Hub", "Knowledge Base", "Client History", "Project History", "Files & Data", "Search & Insights"]
    x0, y, w, h, gap = 42, 310, 135, 67, 15
    for i, name in enumerate(modules):
        x = x0 + i * (w + gap)
        rounded(c, x, y, w, h, BLUE_SOFT, BLUE, 10, 0.8)
        paragraph(c, name, x + 10, y + 43, w - 20, 10.5, INK, True, 13, TA_CENTER)
    actions = [
        ("CAPTURE", "Conversations, documents, decisions and outcomes enter the system."),
        ("ORGANISE", "Information connects to the correct agency, client, project and activity."),
        ("RETRIEVE", "Agents search history using natural-language questions."),
        ("APPLY", "Relevant context informs planning, execution and human decisions."),
        ("LEARN", "New outcomes become approved knowledge for future work."),
    ]
    ax, ay, aw, ah, ag = 42, 161, 158, 102, 24
    for i, (title, body) in enumerate(actions):
        x = ax + i * (aw + ag)
        card(c, x, ay, aw, ah, title, body, BLUE, WHITE, title_size=10.5, body_size=8.6)
        if i < len(actions) - 1:
            arrow(c, x + aw + 4, ay + ah / 2, x + aw + ag - 4, ay + ah / 2, BLUE, 1.3)
    rounded(c, 42, 66, PAGE_W - 84, 61, PURPLE_SOFT, HexColor("#D6C9FA"), 10, 0.8)
    paragraph(c, "What the Communication Hub hears, the Second Brain remembers - and what it remembers improves the next action.",
              67, 108, PAGE_W - 134, 12, PURPLE_DARK, True, 16, TA_CENTER)
    page_footer(c, page_no)


def draw_intelligence(c, page_no):
    page_header(c, "06 - TIER 3", "Intelligence turns context into governed action",
                "Enque has a precise operating language for decomposing and executing agency work.")
    chain = [
        ("SERVICE LINE", "Reusable client outcome"),
        ("ACTIVITY", "One accountable unit of work"),
        ("SKILL", "Reusable procedure or instruction"),
        ("WORKFLOW", "Saved execution graph"),
        ("RUN", "One recorded execution"),
        ("OUTPUT", "Deliverable, action or result"),
    ]
    x0, y, w, h, gap = 34, 317, 132, 75, 22
    for i, (title, body) in enumerate(chain):
        x = x0 + i * (w + gap)
        rounded(c, x, y, w, h, WHITE, HexColor("#CFC3F4"), 10, 0.9)
        c.setFillColor(PURPLE)
        c.circle(x + w / 2, y + h - 17, 10, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont(FONT_BOLD, 8)
        c.drawCentredString(x + w / 2, y + h - 20, str(i + 1))
        paragraph(c, title, x + 8, y + 43, w - 16, 9.5, INK, True, 11, TA_CENTER)
        paragraph(c, body, x + 9, y + 24, w - 18, 7.8, MUTED, False, 9.2, TA_CENTER)
        if i < len(chain) - 1:
            arrow(c, x + w + 3, y + h / 2, x + w + gap - 3, y + h / 2, PURPLE, 1.4)
    paragraph(c, "Every activity carries nine attributes", 42, 274, 260, 11, PURPLE, True)
    attrs = ["State", "Assignment", "Execution", "Directive", "Files", "Metric", "Timing", "Communications", "Relations"]
    for i, item in enumerate(attrs):
        col, row = i % 5, i // 5
        x = 42 + col * 170
        yy = 224 - row * 48
        rounded(c, x, yy, 150, 36, HexColor("#F8F6FF"), HexColor("#DED4FA"), 9, 0.7)
        paragraph(c, item, x + 8, yy + 24, 134, 9.5, INK, True, 11, TA_CENTER)
    rounded(c, 42, 67, PAGE_W - 84, 56, PURPLE, PURPLE, 10, 0)
    paragraph(c, "A service line defines the outcome. Activities organise the work. Skills provide expertise. Workflows execute it. Every run is recorded and measured.",
              62, 105, PAGE_W - 124, 11, WHITE, True, 15, TA_CENTER)
    page_footer(c, page_no)


def draw_control(c, page_no):
    page_header(c, "07 - TIER 4", "Control applies across every layer, module, agent, and action",
                "Governance is part of the operating system, not an afterthought.")
    controls = [
        ("Roles & Permissions", "Tenant-scoped access across all tiers", PURPLE),
        ("Agency Admin", "Agency-wide configuration and teams", PURPLE),
        ("APIs & Integrations", "External tools, data and model connections", PURPLE),
        ("Platform Admin", "Platform-wide configuration", HexColor("#9B6EFA")),
        ("Security & Isolation", "Secrets, isolation and deterministic controls", HexColor("#9B6EFA")),
        ("Audit Logs", "Every run traced and reviewable", HexColor("#9B6EFA")),
    ]
    for i, (title, body, accent) in enumerate(controls):
        col, row = i % 3, i // 3
        x, y = 42 + col * 299, 286 - row * 116
        card(c, x, y, 273, 94, title, body, accent, WHITE, title_size=12, body_size=9.2)
    rounded(c, 42, 65, 565, 78, HexColor("#F8F6FF"), HexColor("#D8CCFA"), 12, 0.8)
    paragraph(c, "External systems", 59, 123, 150, 11, PURPLE, True)
    paragraph(c, "CRM  |  Communications  |  Storage  |  AI models  |  Payments  |  Agency tools",
              59, 100, 525, 10, MUTED, False, 13)
    rounded(c, 631, 65, 287, 78, PURPLE, PURPLE, 12, 0)
    paragraph(c, "Control -> Context -> Execution -> Outcomes -> Learning", 650, 119, 250, 11.5, WHITE, True, 15, TA_CENTER)
    paragraph(c, "The orchestration loop remains visible and accountable.", 650, 88, 250, 8.8, HexColor("#DCCEFF"), False, 11, TA_CENTER)
    page_footer(c, page_no)


def draw_orchestration(c, page_no):
    c.setFillColor(BLACK_BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    page_header(c, "08 - ORCHESTRATION LOOP", "The whole system works as a continuous learning loop",
                "Every completed engagement creates new context. That context improves the next decision.", True)
    nodes = [
        ("CONTROL", "governs", PURPLE),
        ("INTELLIGENCE", "orchestrates", HexColor("#42C6E5")),
        ("CONTEXT", "informs", HexColor("#4DD2A9")),
        ("WORK", "executes", ORANGE),
        ("OUTCOMES", "measure", HexColor("#F0B23C")),
        ("LEARNING", "improves", HexColor("#B88BFF")),
    ]
    cx, cy, radius = PAGE_W / 2, 205, 135
    import math
    positions = []
    for i in range(len(nodes)):
        a = math.radians(150 - i * 60)
        positions.append((cx + radius * math.cos(a), cy + radius * math.sin(a)))
    for i, (title, verb, color) in enumerate(nodes):
        x, y = positions[i]
        nx, ny = positions[(i + 1) % len(nodes)]
        arrow(c, x, y, nx, ny, color, 2)
    for (title, verb, color), (x, y) in zip(nodes, positions):
        c.setFillColor(Color(color.red, color.green, color.blue, alpha=0.20))
        c.setStrokeColor(color)
        c.setLineWidth(1.3)
        c.circle(x, y, 42, fill=1, stroke=1)
        paragraph(c, title, x - 38, y + 9, 76, 9, WHITE, True, 11, TA_CENTER)
        paragraph(c, verb, x - 38, y - 8, 76, 8, HexColor("#C9CFDB"), False, 9.5, TA_CENTER)
    c.setFillColor(PURPLE)
    c.circle(cx, cy, 62, fill=1, stroke=0)
    paragraph(c, "ENQUE<br/>LOOP", cx - 52, cy + 13, 104, 14, WHITE, True, 17, TA_CENTER)
    rounded(c, 675, 150, 226, 198, HexColor("#141B27"), HexColor("#313B4C"), 12, 1)
    paragraph(c, "What changes", 693, 325, 190, 11, HexColor("#B994FF"), True)
    bullet_list(c, [
        "Expertise no longer remains trapped inside individuals.",
        "SOPs become executable workflows.",
        "Agents perform work with evidence, context and accountability.",
        "Human teams retain control over approvals and critical actions.",
        "New services can be added without rebuilding the platform.",
    ], 693, 299, 185, HexColor("#D7DCE6"), HexColor("#9C71FA"), 8.8, 6)
    c.setFillColor(MUTED)
    c.setFont(FONT, 7.5)
    c.drawRightString(PAGE_W - 42, 11, f"{page_no:02d}")


def draw_foundation(c, page_no):
    page_header(c, "09 - PRODUCT FOUNDATION", "The engine is built before the module catalog expands",
                "The product deck positions Agent Production House, DataBlue, and the Second Brain as reusable foundations.")
    foundations = [
        ("Agent Production House", "Create, equip, deploy, and govern specialized AI agents without rebuilding the underlying system.", PURPLE, PURPLE_SOFT),
        ("DataBlue", "Collect and structure external data separately, then expose it to agents through governed access.", BLUE, BLUE_SOFT),
        ("Second Brain", "Capture, organize, retrieve, apply, and learn from agency knowledge across clients and projects.", GREEN, GREEN_SOFT),
    ]
    for i, (title, body, accent, fill) in enumerate(foundations):
        x = 42 + i * 299
        rounded(c, x, 224, 273, 166, fill, accent, 14, 1)
        c.setFillColor(accent)
        c.circle(x + 32, 350, 17, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont(FONT_BOLD, 10)
        c.drawCentredString(x + 32, 346, str(i + 1))
        paragraph(c, title, x + 58, 366, 195, 14, INK, True, 17)
        paragraph(c, body, x + 19, 316, 235, 10, MUTED, False, 14)
    paragraph(c, "Reusable system components", 42, 189, 220, 10.5, PURPLE, True)
    components = ["Agent Runtime & Studio", "Skills Library", "Workflow Engine", "Tool Platform & Connectors", "LLM Management", "Memory & Data Plane", "Multi-tenancy", "Observability & Governance"]
    for i, item in enumerate(components):
        col, row = i % 4, i // 4
        x, y = 42 + col * 225, 137 - row * 46
        rounded(c, x, y, 207, 34, WHITE, LINE, 8, 0.7)
        paragraph(c, item, x + 8, y + 23, 191, 9, INK, True, 11, TA_CENTER)
    page_footer(c, page_no)


def draw_roadmap(c, page_no):
    page_header(c, "10 - BUILD STATUS", "Be transparent about what is built and what comes next",
                "Status should be data-driven on the website so it can evolve without a redesign.")
    statuses = [("BUILT", GREEN), ("UNDER DEVELOPMENT", ORANGE), ("TO BE BUILT", PURPLE)]
    x = 42
    for label, color in statuses:
        width = 86 if label == "BUILT" else 150 if label == "UNDER DEVELOPMENT" else 105
        pill(c, label, x, 417, color, WHITE, width)
        x += width + 12
    rows = [
        ("WORK", "Proposals, Projects", "Prospects", "Production Studio, Marketplace, Performance, Audits, RFP, Content, Media, Web"),
        ("CONTEXT", "-", "Knowledge Base, Communication, Client/Project History, Files, Search", "Future context extensions"),
        ("INTELLIGENCE", "Skills, Workflows, Memory", "Agent & Module Routing", "Evaluation & Learning, Reasoning & Planning"),
        ("CONTROL", "Roles, Agency Admin, APIs", "-", "Platform Admin, Security & Isolation, Audit Logs"),
    ]
    headers = ["TIER", "BUILT", "UNDER DEVELOPMENT", "TO BE BUILT / EXPANDABLE"]
    widths = [95, 195, 290, 306]
    x0, y0, row_h = 42, 370, 70
    x = x0
    for head, w in zip(headers, widths):
        c.setFillColor(HexColor("#F1F2F6"))
        c.rect(x, y0, w, 32, fill=1, stroke=0)
        paragraph(c, head, x + 8, y0 + 22, w - 16, 8.5, MUTED, True, 10)
        x += w
    for ridx, row in enumerate(rows):
        y = y0 - (ridx + 1) * row_h
        x = x0
        fill = WHITE if ridx % 2 == 0 else HexColor("#FAFAFC")
        for cidx, (cell, w) in enumerate(zip(row, widths)):
            c.setFillColor(fill)
            c.setStrokeColor(LINE)
            c.setLineWidth(0.5)
            c.rect(x, y, w, row_h, fill=1, stroke=1)
            paragraph(c, cell, x + 8, y + row_h - 13, w - 16, 8.7 if cidx else 9.5,
                      INK if cidx else PURPLE, cidx == 0, 11)
            x += w
    rounded(c, 42, 55, PAGE_W - 84, 48, PURPLE_SOFT, HexColor("#D6C9FA"), 10, 0.8)
    paragraph(c, "Proof points in the source deck: 111 skills, 47 workflows, 78 tools, and 51 delivered use cases.",
              58, 87, PAGE_W - 116, 10.5, PURPLE_DARK, True, 13, TA_CENTER)
    page_footer(c, page_no)


def draw_visitors(c, page_no):
    page_header(c, "11 - CONVERSION PATHS", "Different visitors need different proof before the same CTA",
                "Keep the navigation simple while allowing each buyer to reach the detail they need.")
    journeys = [
        ("AGENCY LEADER", "Home -> Platform -> Outcomes -> Build Status -> Demo", "Can this unify our agency, and what exists now?", PURPLE),
        ("OPERATIONS LEADER", "Home -> How It Works -> Context + Intelligence -> Integrations -> Demo", "How does work move, and how is knowledge reused?", BLUE),
        ("DELIVERY TEAM", "Home -> Work Modules -> Module Family -> Shared Context -> Demo", "What daily work can I do, and how are handoffs reduced?", ORANGE),
        ("TECH / SECURITY", "Home -> System -> Control -> Security -> APIs -> Contact", "How is access controlled, isolated, integrated, and audited?", GREEN),
    ]
    for i, (role, path, question, accent) in enumerate(journeys):
        col, row = i % 2, i // 2
        x, y = 42 + col * 448, 263 - row * 143
        rounded(c, x, y, 422, 120, WHITE, LINE, 12, 0.8)
        pill(c, role, x + 16, y + 84, accent, WHITE, 126)
        paragraph(c, path, x + 16, y + 72, 390, 10.5, INK, True, 14)
        paragraph(c, question, x + 16, y + 39, 390, 9.5, MUTED, False, 12)
    rounded(c, 42, 54, PAGE_W - 84, 50, PURPLE, PURPLE, 10, 0)
    paragraph(c, "One destination: Request a Demo", 62, 88, PAGE_W - 124, 13, WHITE, True, 16, TA_CENTER)
    page_footer(c, page_no)


def draw_rules(c, page_no):
    page_header(c, "12 - CONTENT SYSTEM", "Make the site feel like one operating model, not a tool catalog",
                "These rules keep product language, visuals, roadmap messaging, and conversion coherent.")
    rules = [
        "Introduce outcomes before architecture.",
        "Use four tier names consistently: Work, Context, Intelligence, Control.",
        "Treat guarantees as cross-cutting properties, not a fifth module tier.",
        "Separate current capabilities from roadmap items at every touchpoint.",
        "Use tier colors independently from build-status colors.",
        "Put detailed features behind cards, tabs, or dedicated module pages.",
        "Show directional flow: Control governs, Intelligence orchestrates, Context informs, Work delivers.",
        "Position Enque as unified orchestration, not a loose collection of AI tools.",
        "End every major exploration path with a demo or contact action.",
    ]
    for i, rule in enumerate(rules):
        col, row = i % 3, i // 3
        x, y = 42 + col * 299, 306 - row * 89
        rounded(c, x, y, 273, 68, HexColor("#FAF9FD"), HexColor("#E2DDF0"), 10, 0.8)
        c.setFillColor(PURPLE)
        c.circle(x + 24, y + 34, 13, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont(FONT_BOLD, 8.5)
        c.drawCentredString(x + 24, y + 31, str(i + 1))
        paragraph(c, rule, x + 47, y + 50, 210, 9.2, INK, True, 11.5)
    rounded(c, 42, 46, PAGE_W - 84, 62, PURPLE, PURPLE, 12, 0)
    paragraph(c, "enque.ai is a modular, governed digital workforce that connects agency work to shared context and reusable intelligence, then learns from every outcome.",
              64, 91, PAGE_W - 128, 13, WHITE, True, 17, TA_CENTER)
    page_footer(c, page_no)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = Canvas(str(OUTPUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    c.setTitle("enque.ai - Website and Product Flow")
    c.setAuthor("enque.ai")
    c.setSubject("Website journey, product architecture, orchestration, and roadmap")
    pages = [
        draw_cover,
        draw_story,
        draw_homepage,
        draw_system,
        draw_work,
        draw_context,
        draw_intelligence,
        draw_control,
        draw_orchestration,
        draw_foundation,
        draw_roadmap,
        draw_visitors,
        draw_rules,
    ]
    for idx, draw in enumerate(pages):
        if idx == 0:
            draw(c)
        else:
            draw(c, idx + 1)
        c.showPage()
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
