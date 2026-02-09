import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppSidebar } from "@/components/AppSidebar";
import { RACES, CLASSES } from "@/lib/characters";

const STEPS = ["Básico", "Atributos", "Detalhes"];

const ATTRIBUTES = ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"];

const CreateCharacter = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    race: "",
    class: "",
    level: 1,
    attributes: Object.fromEntries(ATTRIBUTES.map((a) => [a, 10])),
    background: "",
    backstory: "",
  });

  const updateField = (field: string, value: unknown) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const updateAttr = (attr: string, val: number) =>
    setForm((prev) => ({
      ...prev,
      attributes: { ...prev.attributes, [attr]: Math.max(1, Math.min(20, val)) },
    }));

  const canNext = () => {
    if (step === 0) return form.name && form.race && form.class;
    return true;
  };

  const handleFinish = () => {
    navigate("/personagens");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <main className="flex-1 p-8 max-w-3xl">
        <button
          onClick={() => navigate("/personagens")}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" /> Voltar
        </button>

        <h1 className="text-3xl font-display font-bold text-foreground tracking-wide uppercase mb-2">
          Criar Personagem
        </h1>
        <p className="text-muted-foreground mb-8">Preencha os detalhes do seu novo aventureiro</p>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-semibold border transition-colors ${
                  i <= step
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={`text-sm font-display ${
                  i <= step ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s}
              </span>
              {i < STEPS.length - 1 && (
                <div className={`w-12 h-px mx-2 ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {step === 0 && (
              <>
                <div className="space-y-2">
                  <Label>Nome do Personagem</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Ex: Thorin Escudo de Ferro"
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Raça</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {RACES.map((r) => (
                      <button
                        key={r}
                        onClick={() => updateField("race", r)}
                        className={`px-3 py-2.5 rounded-md border text-sm font-display transition-colors ${
                          form.race === r
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-card text-foreground hover:border-primary/40"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Classe</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {CLASSES.map((c) => (
                      <button
                        key={c}
                        onClick={() => updateField("class", c)}
                        className={`px-3 py-2.5 rounded-md border text-sm font-display transition-colors ${
                          form.class === c
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-card text-foreground hover:border-primary/40"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 max-w-30">
                  <Label>Nível</Label>
                  <Input
                    type="number"
                    min={1}
                    max={20}
                    value={form.level}
                    onChange={(e) => updateField("level", Number(e.target.value))}
                    className="bg-card"
                  />
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <p className="text-sm text-muted-foreground">Distribua os valores de atributo (1-20)</p>
                <div className="grid grid-cols-2 gap-4">
                  {ATTRIBUTES.map((attr) => (
                    <div key={attr} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                      <span className="font-display text-sm text-foreground">{attr}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateAttr(attr, form.attributes[attr] - 1)}
                          className="w-7 h-7 rounded bg-secondary text-foreground flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-display font-bold text-foreground">
                          {form.attributes[attr]}
                        </span>
                        <button
                          onClick={() => updateAttr(attr, form.attributes[attr] + 1)}
                          className="w-7 h-7 rounded bg-secondary text-foreground flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label>Antecedente</Label>
                  <Input
                    value={form.background}
                    onChange={(e) => updateField("background", e.target.value)}
                    placeholder="Ex: Soldado, Nobre, Eremita..."
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label>História do Personagem</Label>
                  <Textarea
                    value={form.backstory}
                    onChange={(e) => updateField("backstory", e.target.value)}
                    placeholder="Conte a história de origem do seu personagem..."
                    rows={6}
                    className="bg-card resize-none"
                  />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-10 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
          </Button>

          {step < STEPS.length - 1 ? (
            <Button onClick={() => setStep((s) => s + 1)} disabled={!canNext()}>
              Próximo <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleFinish} className="glow-red">
              <Check className="h-4 w-4 mr-1" /> Criar Personagem
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateCharacter;
